import { status } from "@functions/core/Constants";
import { BaseRequest } from "@functions/core/entities/BaseRequest";
import { BaseResponse } from "@functions/core/entities/BaseResponse";
import { User, UserSchema } from "@functions/core/entities/User";
import { ISignUpUseCase } from "@functions/core/interfaces/ISignUpUseCase";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {

    constructor(
        @inject("ISignUpUseCase") private signUpUseCase: ISignUpUseCase
    ) { }

    create = async (request: BaseRequest): Promise<BaseResponse> => {
        
        let user: User = UserSchema.parse({
            email: request.body.email,
            password: request.body.password,
            access: request.body.access
        });
        
        let result: boolean = await this.signUpUseCase.createUser(user);

        return {
            status: result ? status.OK : status.BAD_REQUEST,
            message: result ? "User created successfully" : "Bad request. Please try again",
            data: {
                success: result
            }
        }

    }

}