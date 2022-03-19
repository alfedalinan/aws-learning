import { BaseRequest } from "@functions/core/entities/BaseRequest";
import { BaseResponse } from "@functions/core/entities/BaseResponse";
import { injectable } from "tsyringe";

@injectable()
export class UserController {

    constructor(

    ) { }

    create = async (request: BaseRequest): Promise<BaseResponse> => {

        request;

        return {
            status: 200,
            message: "OK",
            data: {
                success: true
            }
        }

    }

}