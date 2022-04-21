import { knex } from "knex";
import KnexMysql from 'knex/lib/dialects/mysql';
import { mysqlConfig } from "./Constants";
import { configSet } from "../utils/Loader";


const connection = {
    host: configSet.MYSQL_HOST,
    user: configSet.MYSQL_USER,
    password: configSet.MYSQL_PASS,
    database: configSet.MYSQL_DB
};

export const db = knex({
    client: 'mysql',
    connection
});
