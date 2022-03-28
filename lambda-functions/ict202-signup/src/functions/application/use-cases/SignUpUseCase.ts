import { ISignUpUseCase } from "@functions/core/interfaces/ISignUpUseCase";
import { IUserRepository } from "@functions/core/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { AES, enc } from "crypto-js";
import { keys } from "src/functions/framework/configs/Constants";

@injectable()
export class SignUpUseCase implements ISignUpUseCase {
    
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) { }
    
    async createUser(user: { email?: string; password?: string; access?: string[]; }): Promise<boolean> {
        
        user.password = AES.decrypt(user.password.split(":")[1], keys.encryption).toString(enc.Utf8);

        let repoResult: boolean = await this.userRepository.createOne(user);

        return repoResult;

    }

}