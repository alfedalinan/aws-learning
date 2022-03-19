export interface IDbHelper {
    createOne(tableName: string, params: any): Promise<any>;
}