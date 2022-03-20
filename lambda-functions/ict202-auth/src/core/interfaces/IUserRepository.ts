import { User } from "../entities/User";

export interface IUserRepository {
    readOne(email: string, password: string): Promise<User>;
}