import { ISignUpUseCase } from "@functions/core/interfaces/ISignUpUseCase";

export class SignUpUseCase implements ISignUpUseCase {
    async createUser(user: { email?: string; password?: string; access?: string[]; }): Promise<boolean> {
        user;
        return true;

    }

}