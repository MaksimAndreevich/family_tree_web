import { axiosClassic } from "@/lib/api/interceprors";

import { IAuthResponse, ILoginRequestParams, IRegisterRequestParams } from "./interfaces";
import { saveTokenStorage } from "./token-processes";

class AuthService {
  async login(data: ILoginRequestParams) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/login`, data);

    if (response.data.token) saveTokenStorage(response.data.token);

    return response.data;
  }

  async register(data: IRegisterRequestParams) {
    const response = await axiosClassic.post<IAuthResponse>(`/auth/register`, data);

    if (response.data.token) saveTokenStorage(response.data.token);

    return response.data;
  }
}

export const authService = new AuthService();
