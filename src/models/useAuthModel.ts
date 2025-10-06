import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AxiosCall from "@/utils/axios";
import { useRouter } from "next/navigation";
import Message from "@/components/Message/Message";


const useAuthModel = () => {
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [isSigningIn, setIsSigningIn] = useState(false)

    const router = useRouter()

    const signup = async (data: any) => {
        try {
            setIsSigningUp(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/auth/sign-up",
                data: data
            });

            setIsSigningUp(false)
            if (res.success) {
                router.push("/link-github")

                localStorage.setItem("authToken", res.accessToken)

            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSigningUp(false)
            Message.error(err?.response.data.message)
        }
    }

    const signin = async (data: any) => {
        try {
            setIsSigningIn(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/admin/login",
                data: data
            });

            setIsSigningIn(false)
            if (res.error == false) {
                localStorage.setItem("authToken", res.data.accessToken)

                Message.success("Signin in successfull")
                router.push("/dashboard")
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSigningIn(false)
            Message.error(err?.response.data.message)
        }
    }

    const [isSendingOtp, setIsSendingOtp] = useState(false)

    const forgotPassword = async (data: any) => {
        try {
            setIsSendingOtp(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/api/auth/forgot-password",
                data: data
            });

            setIsSendingOtp(false)
            if (res.success) {
                Message.success(res?.message ?? "success")
                router.push("/forgot-password-otp")
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSendingOtp(false)
            Message.error(err?.response.data.message)
        }
    }

    const [isResetingPassword, setIsResetingPassword] = useState(false)

    const resetPassword = async (data: any) => {
        try {
            setIsResetingPassword(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/api/auth/reset-password",
                data: data
            });

            setIsResetingPassword(false)
            if (res.success) {
                Message.success(res?.message ?? "success")

                router.push("/forgot-password-success")
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsResetingPassword(false)
            Message.error(err?.response.data.message)
        }
    }

    const [isFetchingInstallToken, setIsFetchingInstallToken] = useState(false)

    const getInstallationAccessToken = async () => {
        try {
            setIsFetchingInstallToken(true)
            await AxiosCall({
                method: "GET",
                path: "/api/auth/installation-token"
            });

            // setIsFetchingInstallToken(false)
            // if (res?.success) {
                // setFetchedInstallToken(true)
                // setGitInfo(res?.data ?? null)
                const token = localStorage.getItem("authToken")
        
                window.location.href = "https://fletch.coralscale.com?acceess_token=" + token
            // } else {
            //     Message.error(res.message)
            // }
        } catch (err: any) {
            setIsFetchingInstallToken(false)
            Message.error(err?.response.data.message)
        }
    }
    
    const [isFetchingRepo, setIsFetchingRepo] = useState(false)
    const [repoList, setRepoList] = useState([])

    const fetchRepos = async () => {
        try {
            setIsFetchingRepo(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/api/github/fetch-connected-repo"
            });

            setIsFetchingRepo(false)
            if (res.success) {

                console.log('====================================');
                console.log(res);
                console.log('====================================');
                setRepoList(res.data)

            } else {
                Message.error(res?.message)
            }
        } catch (err: any) {
            setIsFetchingRepo(false)
            Message.error(err?.response?.data?.message)
        }
    }


    return {
        signup,
        signin,
        isSigningIn,
        isSigningUp,
        isFetchingInstallToken,
        getInstallationAccessToken,
        isFetchingRepo,
        repoList,
        fetchRepos,
        isSendingOtp,
        forgotPassword,
        resetPassword,
        isResetingPassword
    }
}

export default useAuthModel
