import "reflect-metadata";
import { container } from "tsyringe";
import { SignUpUseCase } from "@functions/application/use-cases/SignUpUseCase";
import { IDbHelper } from "@functions/core/interfaces/IDbHelper";
import { ISignUpUseCase } from "@functions/core/interfaces/ISignUpUseCase";
import { IUserRepository } from "@functions/core/interfaces/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { DbHelper } from "./DbHelper";
import { UserController } from "@functions/application/controllers/UserController";

container.registerSingleton<IUserRepository>("IUserRepository", UserRepository);
container.registerSingleton<ISignUpUseCase>("ISignUpUseCase", SignUpUseCase);
container.registerSingleton<IDbHelper>("IDbHelper", DbHelper);
container.register<UserController>("UserController", UserController);

export const containers = container 