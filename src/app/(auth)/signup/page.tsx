import SignupPage from "@/modules/auth/signup/SignupPage";
import { redirect } from "next/navigation";
import React from "react";
import { validateSignupToken } from "@/lib/api/server/admin";
import { registerAdmin } from "@/lib/api/server/admin";

export const dynamic = 'force-dynamic';

interface PageProps {
    searchParams: Promise<{
        token: string;
    }>;
}

export default async function SignUpPage({ searchParams }: PageProps) {
  // get search params
  const { token } = await searchParams;
  if (!token) {
    redirect("/login");
  }

  // validate token
  const tokenInfo = await validateSignupToken(token);
  return (
      <SignupPage tokenInfo={tokenInfo} register={registerAdmin} />
  );
}
