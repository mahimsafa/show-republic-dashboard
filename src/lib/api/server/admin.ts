import { redirect } from "next/navigation";
import client from "../../fetch-client";
import type { IAdmin } from "@/typings/admin";

export const getAdmin = async (): Promise<IAdmin | null> => {
    try {
        const admin = await client.get("api/v1/admins/me");
        return admin as IAdmin;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getAdmins = async (): Promise<IAdmin[] | null> => {
    try {
        const admins = await client.get("api/v1/admins");
        return admins as IAdmin[];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const inviteAdmin = async (email: string): Promise<any | null> => {
    "use server"

    try {
        const data = await client.post("api/v1/admin-invitations/invite", {email});
        return data;
    } catch (error) {
        return error;
    }
};

export const validateSignupToken = async (token: string): Promise<any> => {
    try {
        const data = await client.get(`api/v1/admin-invitations/validate/${token}`);
        return data;
    } catch (error) {
        return false;
    }
}

interface IRegisterAdmin {
    name: string;
    password: string;
    token: string;
}

export const registerAdmin = async (data: IRegisterAdmin): Promise<any> => {
    "use server"
    try {
        const response = await client.post("api/v1/admin-invitations/complete-signup", data);
        return response;
    } catch (error) {
        return error;
    }
}

export const updateAdmin = async (admin: IAdmin): Promise<IAdmin | null> => {
    try {
        const data = await client.put("/api/v1/admins", admin);
        // @ts-expect-error ts(2322)
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

