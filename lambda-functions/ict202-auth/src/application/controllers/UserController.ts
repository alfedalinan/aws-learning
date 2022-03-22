import { BaseRequest } from "src/core/entities/BaseRequest";
import { BaseResponse } from "src/core/entities/BaseResponse";
import { TokenDetails } from "src/core/entities/TokenDetails";
import { IAuthenticationUseCase } from "src/core/interfaces/IAuthenticateUseCase";
import { status } from "src/core/Constants";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {

    constructor(
        @inject("IAuthenticationUseCase") private authUseCase: IAuthenticationUseCase
    ) { }

    authenticate = async (request: BaseRequest): Promise<BaseResponse> => {
        
        try {
            
            let email: string = request.body.email;
            let password: string = request.body.password;

            let tokens: TokenDetails = await this.authUseCase.authenticate(email, password);

            return {
                status: tokens != null ? status.OK : status.UNAUTHORIZED,
                message: tokens != null ? "OK" : "Unauthorized",
                data: tokens
            };

        } catch (error) {
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "An error has occured",
                data: JSON.stringify(error)
            };
        }

    }
}