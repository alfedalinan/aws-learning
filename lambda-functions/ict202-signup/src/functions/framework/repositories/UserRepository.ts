// import { IDbHelper } from "@functions/core/interfaces/IDbHelper";
import { IDbHelper } from "@functions/core/interfaces/IDbHelper";
import { IUserRepository } from "@functions/core/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserRepository implements IUserRepository {
    
    constructor(
        @inject("IDbHelper") private dbHelper: IDbHelper
    ) { }

    async createOne(user: { email?: string; password?: string; access?: string[]; }): Promise<boolean> {
        
        let params: any = {
            email: user.email,
            password: user.password,
            access: JSON.stringify(user.access)
        }

        return await this.dbHelper.createOne("users", params);
        
    }

}