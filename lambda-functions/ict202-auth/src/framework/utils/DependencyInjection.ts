import "reflect-metadata";
import { UserController } from "src/application/controllers/UserController";
import { AuthenticationUseCase } from "src/application/use-cases/AuthenticationUseCase";
import { IAuthenticationUseCase } from "src/core/interfaces/IAuthenticateUseCase";
import { IDbHelper } from "src/core/interfaces/IDbHelper";
import { IUserRepository } from "src/core/interfaces/IUserRepository";
import { container } from "tsyringe";
import { UserRepository } from "../repositories/UserRepository";
import { DbHelper } from "./DbHelper";

container.registerSingleton<IDbHelper>("IDbHelper", DbHelper);
container.registerSingleton<IUserRepository>("IUserRepository", UserRepository);
container.registerSingleton<IAuthenticationUseCase>("IAuthenticationUseCase", AuthenticationUseCase);
container.register<UserController>("UserController", UserController);

export const containers = container;