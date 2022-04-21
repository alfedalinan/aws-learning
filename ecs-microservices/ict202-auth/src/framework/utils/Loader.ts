import * as dotenv from "dotenv";

switch (process.env.NODE_ENV) {
    case "dev":
        dotenv.config({ path: __dirname + '/../../../.env.dev' });
        
        break;
    default:
        dotenv.config({ path: __dirname + '/../../../.env' });
        break;
}

export const configSet = process.env;