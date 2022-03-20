import { knex } from "knex";
import KnexMysql from 'knex/lib/dialects/mysql';
import { mysqlConfig } from "./Constants";

const connection = {
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
};

export const db = knex({
    client: KnexMysql,
    connection
});
