import { IDbHelper } from "@functions/core/interfaces/IDbHelper";

export class DbHelper implements IDbHelper {
    
    createOne(tableName: string, params: any): Promise<any> {
        tableName;
        params;
        throw new Error("Method not implemented.");
    }
}