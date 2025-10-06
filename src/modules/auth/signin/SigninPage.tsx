"use client";

import "./style.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";

// import { InputIcon, Label, SubmitButton } from "@repo/common";
import Loader from "@/components/Loader/Loader";
import client from "@/lib/axios-client";
import { setAuthTokens } from "@/lib/auth";
import Label from "@/components/Label";
import InputIcon from "@/components/InputIcon";
import SubmitButton from "@/components/common/SubmitButton";

const SigninPage: React.FC = () => {
  const router = useRouter();
  const [response, setResponse] = useState({message: '', success: true});
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    setResponse({message: '', success: true});
    try {
      const response = await client.post("/api/v1/admins/auth/login", data);
      // @ts-expect-error ignore
      setAuthTokens(response.token);
      // @ts-expect-error ignore
      if(response.isProfileCompleted){
        setResponse({message: 'Login successful. Redirecting to dashboard...', success: true});
        router.push("/dashboard");
      }else{
        setResponse({message: 'Login successful. Redirecting to profile setup...', success: true});
        router.push("/profile-setup");
      }
    } catch (error) {
      setResponse({message: error?.message || 'An unexpected error occurred.', success: false});
    }
  };

  return (
    <div className="page-container">
      <div className="dashboard-login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column gap-1">
                <Label htmlFor="email">Email</Label>
                <InputIcon
                  iconType={IoMailOutline}
                  iconSize={20}
                  type="text"
                  placeholder="Enter your email"
                  className="input"
                  {...register("email", { required: "Email is required" })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p role="alert" className="text-danger">
                  {/* @ts-expect-error ignore */}
                  {errors.email.message}
                </p>}
              </div>

              <div className="d-flex flex-column gap-1">
                <Label htmlFor="password">Password</Label>
                <InputIcon
                  iconType={IoLockClosedOutline}
                  iconSize={20}
                  type="password"
                  placeholder="Enter your password"
                  className="input"
                  {...register("password", { required: "Password is required" })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p role="alert" className="text-danger">
                  {/* @ts-expect-error ignore */}
                  {errors.password.message}
                </p>}
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <SubmitButton>{isSubmitting ? <Loader /> : "Log In"}</SubmitButton>
            </div>
            {response.message && <p className={response.success ? "text-success" : "text-danger"}>
              {response.message}
            </p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
