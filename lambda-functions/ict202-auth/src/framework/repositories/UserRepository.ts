import { User } from "src/core/entities/User";
import { IDbHelper } from "src/core/interfaces/IDbHelper";
import { IUserRepository } from "src/core/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserRepository implements IUserRepository {
    
    constructor(
        @inject("IDbHelper") private dbHelper: IDbHelper
    ) { }
    
    async readOne(email: string, password: string): Promise<User> {
        
        let dbResult: any = await this.dbHelper.readSingle("users", { email: email, password: password });
        let user: User = dbResult;

        return user;
    }

}