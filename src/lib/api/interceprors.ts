import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

import { NEXT_PUBLIC_API_URL } from "../constants";
import { getAccessToken } from "../services/auth/token-processes";

import { getContentType } from "./helper";

/**
 * Базовые настройки для axios инстансов
 * @type {CreateAxiosDefaults}
 */
const options: CreateAxiosDefaults = {
  baseURL: NEXT_PUBLIC_API_URL,
  headers: getContentType(),
  withCredentials: true,
};

export const axiosClassic: AxiosInstance = axios.create(options);
export const axiosWithAuth: AxiosInstance = axios.create(options);

/**
 * Интерцептор для добавления токена авторизации к каждому запросу
 * Проверяет наличие токена и добавляет его в заголовки
 */
axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
