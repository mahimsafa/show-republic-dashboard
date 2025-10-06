// "use client";
import { liveSubscriptions } from "@/data/sidebar/liveSubscriptions";
import AdminsPage from "@/modules/admins/AdminsPage";
import { getAdmins, getAdmin, inviteAdmin } from "@/lib/api/server/admin";
import Header from "@/components/Header";
import Divider from "@/components/Divider";

export const dynamic = 'force-dynamic';

const Admins = async () => {
  const admins = await getAdmins();
  const admin = await getAdmin();

  const subscriptions = liveSubscriptions;

  return (
    <div className="w-full">
      <div className="p-1 p-sm-2">
        <Header
        // @ts-expect-error ignore
          title="Manage Admins" 
          user={admin} 
          liveSubscriptions={subscriptions} 
          headerClassName="custom-dashboard-header" 
          searchbarClassName="custom-dashboard-searchbar"
        />
      </div>
      <Divider />
      <div className="flex justify-between">
        
        <AdminsPage admins={admins} inviteAdmin={inviteAdmin} />
      </div>
    </div>
  );
};

export default Admins;
