import { TokenType } from "@/lib/types/common.interfaces";
import { IUser } from "@/lib/types/user.interface";

export type IRegisterRequestParams = Pick<IUser, "email" | "username"> & {
  password: string;
};

export type ILoginRequestParams = Pick<IUser, "email"> & {
  password: string;
};

export interface IAuthResponse {
  user: IUser;
  token: TokenType;
}
