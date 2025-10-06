import { Header, Divider } from "@repo/common";
import { userProfile } from "@/data/profile";
import { liveSubscriptions } from "@/data/sidebar/liveSubscriptions";
import Settings from "@repo/common/src/components/organisms/settings";
import { getAdmin } from "@/lib/api/server/admin";

export const dynamic = 'force-dynamic';

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = userProfile;
  const subscriptions = liveSubscriptions;

  const dashboardTabs = [
    { name: "Profile", path: "/settings" },
    { name: "Permissions/Roles", path: "/settings/roles" },
    { name: "Notification", path: "/settings/notification" },
    { name: "Security", path: "/settings/security" },
  ];

  const admin = await getAdmin();
  return (
    <div className="w-full min-h-screen flex flex-col custom-settings-layout">
      {/* <div className="p-1 p-sm-2">
        <Header
          title="Settings"
          user={user}
          liveSubscriptions={subscriptions}
          headerClassName="custom-dashboard-header"
          searchbarClassName="custom-dashboard-searchbar"
        />
      </div>
      <Divider />
      <Settings tabs={dashboardTabs} /> */}
      <div className="settings-page bg-[#F5F5F5] flex-grow h-auto">
        {children}
      </div>
    </div>
  );
}
