import ProfileSetupPage from "@/modules/auth/profile_setup/ProfileSetupPage";
// import SignupPage from "@/modules/auth/signup/SignupPage";
import React from "react";
import { getAdmin } from "@/lib/api/server/admin";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function SignInPage() {
  const admin = await getAdmin();
  if (!admin) {
    return redirect('/login');
  }
  if (admin.isProfileCompleted) {
    return redirect('/dashboard');
  }
  return (
      <ProfileSetupPage />
  );
}
