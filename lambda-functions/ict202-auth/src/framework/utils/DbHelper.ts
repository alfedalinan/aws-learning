import { IDbHelper } from "src/core/interfaces/IDbHelper";
import { db } from "../configs/RDSConfig";


export class DbHelper implements IDbHelper {
    async readSingle(tableName: string, params: any): Promise<any> {
        
        let resultByEmail: any = await db.select().from(tableName).where(`email`, params.email).limit(1);
        return resultByEmail.length > 0 ? resultByEmail[0] : null;

    }

}