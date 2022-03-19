import { User } from "../entities/User";

export interface IUserRepository {
    createOne(user: User): Promise<boolean>;
}