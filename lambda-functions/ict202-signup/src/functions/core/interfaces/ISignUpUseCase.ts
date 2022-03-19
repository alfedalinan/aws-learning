import { User } from "../entities/User";

export interface ISignUpUseCase {
    createUser(user: User): Promise<boolean>;
}