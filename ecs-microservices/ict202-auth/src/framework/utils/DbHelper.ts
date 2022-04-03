import { IDbHelper } from "../../core/interfaces/IDbHelper";
import { db } from "../configs/RDSConfig";


export class DbHelper implements IDbHelper {
    async readSingle(tableName: string, params: any): Promise<any> {
        
        let resultByEmail: any = await db.select().from(tableName).where(`email`, params.email).limit(1);

        if (resultByEmail.length > 0) {
            
            return resultByEmail[0].password == params.password ? resultByEmail[0] : null;

        }
        else {
            return null;            
        }

        

    }

}