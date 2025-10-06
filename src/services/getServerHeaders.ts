import { cookies } from "next/headers";

const getDefaultHeaders = async () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
    // @ts-ignore
  const token = await cookies()?.get("token")?.value;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

export default getDefaultHeaders;
