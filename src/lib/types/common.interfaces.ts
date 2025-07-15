export interface IBaseGormModel {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export type TokenType = string;

export enum EnumTokens {
  "ACCESS_TOKEN" = "access_token",
  "REFRESH_TOKEN" = "refresh_token",
}
