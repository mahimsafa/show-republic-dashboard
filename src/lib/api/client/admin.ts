import client from "../../axios-client";
import type { IAdmin } from "@/typings/admin";

export const getAdmin = async (): Promise<IAdmin | null> => {
  try {
    const data = await client.get("/api/v1/admins/me");
    // @ts-expect-error ts(2322)
    if(!data.isProfileCompleted){
        window.location.href = "/profile-setup";
    }
    // @ts-expect-error ts(2322)
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};