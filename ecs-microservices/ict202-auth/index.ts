import * as express from "express";
import { V1 } from "./src/framework/routes/v1";
import { server } from "./src/core/Constants";

const app = express();
app.use(express.json());

// version 1 routes
app.use("/v1", V1.routes);

app.listen(server.PORT, () => {
    console.log(`Auth Server: Running at port ${server.PORT}`);
});

export const expressApp = app