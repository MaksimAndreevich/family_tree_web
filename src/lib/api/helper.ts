export const getContentType = () => ({
  "Content-type": "application/json",
});

export const errorCatch = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  const err = error as { response?: { data?: { message?: string | string[] } } };
  const message = err?.response?.data?.message;

  console.warn("[Unknown error in errorCatch]", error);
  if (!message) return "Unknown error";

  return Array.isArray(message) ? message[0] : message;
};
