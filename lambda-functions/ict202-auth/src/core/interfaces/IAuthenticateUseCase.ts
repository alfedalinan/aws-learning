import { TokenDetails } from "../entities/TokenDetails";

export interface IAuthenticationUseCase {
    authenticate(email: string, password: string): Promise<TokenDetails>;
}