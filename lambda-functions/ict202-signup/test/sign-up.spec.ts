import "reflect-metadata";
import { describe, it } from "mocha";
import { UserController } from "../src/functions/application/controllers/UserController";
import { containers } from "../src/functions/framework/utils/DependencyInjection";
import { BaseRequest } from "../src/functions/core/entities/BaseRequest";
import { BaseResponse } from "../src/functions/core/entities/BaseResponse";

const mock = require('../src/functions/signUp/mock.json');

describe("Successful sign-up", () => {

    it("Should return a successful status", (done) => {
        let userController: UserController = containers.resolve(UserController);

        let request: BaseRequest = {
            body: mock.body
        }

        userController.create(request)
            .then((response: BaseResponse) => {
                if (response.status == 200) {
                    done();
                }
            })
    })

})