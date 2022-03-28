import { IDbHelper } from "@functions/core/interfaces/IDbHelper";
import { db } from "../configs/RDSConfig";

export class DbHelper implements IDbHelper {
    
    async createOne(tableName: string, params: any): Promise<any> {
        
        try {
            await db(tableName).insert(params);
            return true;

        } catch (error) {
            return false;
        }

    }
}