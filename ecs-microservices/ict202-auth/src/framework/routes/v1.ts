import * as express from "express";
import "reflect-metadata";
import { UserController } from "../../application/controllers/UserController";
import { expressCallback } from "../utils/ExpressHelper";
import { containers } from "../utils/DependencyInjection";

const router = express.Router();
const userController: UserController = containers.resolve("UserController");

/** AUTHENTICATION */
router.route("/auth")
      .post(expressCallback(userController.authenticate))

export const V1 = {
    routes: router
};