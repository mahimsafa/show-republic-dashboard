// "use client";
import { getAdmin } from "@/lib/api/server/admin";
import ProfilePage from "@/components/settings/Profile";

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const admin = await getAdmin();
  return (
    <div>
      <ProfilePage data={admin}/>
    </div>
  );
}
