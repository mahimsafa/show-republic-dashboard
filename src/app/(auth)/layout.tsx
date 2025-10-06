// import { Divider, Logo } from "@repo/common";

import Divider from "@/components/Divider";
import Logo from "@/components/Logo";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="auth-header">
        <Logo />
        <Divider />
      </header>
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full flex justify-center">{children}</div>
    </div>
    </div>
  );
}
