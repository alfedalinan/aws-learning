// import { IDbHelper } from "@functions/core/interfaces/IDbHelper";
import { IUserRepository } from "@functions/core/interfaces/IUserRepository";
import { injectable } from "tsyringe";

@injectable()
export class UserRepository implements IUserRepository {
    
    constructor(
        
    ) { }

    async createOne(user: { email?: string; password?: string; access?: string[]; }): Promise<boolean> {
        user
        return true;    
    }

}