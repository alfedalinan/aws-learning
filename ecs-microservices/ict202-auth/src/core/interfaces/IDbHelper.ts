export interface IDbHelper {
    readSingle(tableName: string, params: any): Promise<any>;
}