import { TokenDetails } from "../../core/entities/TokenDetails";
import { User } from "../../core/entities/User";
import { IAuthenticationUseCase } from "../../core/interfaces/IAuthenticateUseCase";
import { IUserRepository } from "../../core/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { AES, enc } from "crypto-js";
import { expiry, secrets, keys } from "../../framework/configs/Constants";

@injectable()
export class AuthenticationUseCase implements IAuthenticationUseCase {
    
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) { }
    
    async authenticate(email: string, password: string): Promise<TokenDetails> {
        
        let tokenDetails: TokenDetails = null;

        password = AES.decrypt(password.split(":")[1], keys.encryption).toString(enc.Utf8);
        let repoResult: User = await this.userRepository.readOne(email, password);

        if (repoResult != null) {
            let accessToken: string = await sign({ firstName: repoResult.firstName, lastName: repoResult.lastName, email: repoResult.email, access: JSON.parse(repoResult.access) }, secrets.app, { expiresIn: expiry.access });
            
            tokenDetails = {
                accessToken: accessToken,
                expiresIn: expiry.access
            }
        }

        return tokenDetails;
    }

}