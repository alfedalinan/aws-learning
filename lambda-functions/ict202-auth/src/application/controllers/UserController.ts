import { BaseRequest } from "src/core/entities/BaseRequest";
import { BaseResponse } from "src/core/entities/BaseResponse";
import { TokenDetails } from "src/core/entities/TokenDetails";
import { IAuthenticationUseCase } from "src/core/interfaces/IAuthenticateUseCase";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {

    constructor(
        @inject("IAuthenticationUseCase") private authUseCase: IAuthenticationUseCase
    ) { }

    authenticate = async (request: BaseRequest): Promise<BaseResponse> => {
        
        let email: string = request.body.email;
        let password: string = request.body.password;

        let tokens: TokenDetails = await this.authUseCase.authenticate(email, password);

        return {
            status: 200,
            message: "OK",
            data: tokens
        };

    }
}