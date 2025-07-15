import { IBaseGormModel } from "./common.interfaces";

export interface IUser extends IBaseGormModel {
  username: string;
  email: string;
  isEmailVerified: boolean;
}
