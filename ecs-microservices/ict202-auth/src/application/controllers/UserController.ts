import { status } from "../../core/Constants";
import { BaseRequest } from "../../core/entities/BaseRequest";
import { BaseResponse } from "../../core/entities/BaseResponse";
import { TokenDetails } from "../../core/entities/TokenDetails";
import { IAuthenticationUseCase } from "../../core/interfaces/IAuthenticateUseCase";

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

            if (tokens != null) {
                return {
                    status: status.OK ,
                    message: "OK",
                    data: tokens
                };
            }
            else {

                return {
                    status: status.UNAUTHORIZED ,
                    message: "Unauthorized",
                    data: tokens
                };
            }

        } catch (error) {
            throw {
                status: status.INTERNAL_SERVER_ERROR,
                message: "An error has occured",
                data: JSON.stringify(error)
            };
        }

    }
}