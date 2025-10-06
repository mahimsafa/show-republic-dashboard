import { ReactNode } from "react";

import DashboardSidebar from "@/components/DashboardSidebar";
// import Notifications from "@/components/Notifications";
import Activities from "@/components/Activities";
import ClientWrapper from "./ClientWrapper";

import { dashboardMenus } from "@/data/sidebar/menu";
import { getAdmin } from "@/lib/api/server/admin";
import { redirect } from "next/navigation";
import client from "@/lib/fetch-client";

export const dynamic = "force-dynamic";

async function getActivities() {
  try {
    const { data }: any = await client.get("api/v1/admin/activities");
    return data || [];
  } catch (error) {
    return [];
  }
}

export default async function AppLayout({ children }: { children: ReactNode }) {
  const data = await getAdmin();

  const activities = await getActivities();

  if (!data) {
    redirect("/login");
  }

  return (
    <ClientWrapper>
      <div className="flex h-screen bg-white">
        {/* Sidebar Section */}
        <div className="d-none d-lg-block min-h-screen border-r border-gray-300">
          {/* @ts-expect-error ts(2322) */}
          <DashboardSidebar user={data} menuItems={dashboardMenus} />
        </div>

        {/* Main Content Section (Dashboard + Notifications) */}
        <div
          className="flex w-4/5"
          style={{
            flex: "1",
          }}
        >
          {/* Middle Section for Dashboard Content */}
          <div className="w-3/4 overflow-y-scroll">
            <div className="w-full">{children}</div>
          </div>

          {/* Notifications Section */}
          <div
            className="d-none d-xl-block"
            style={{
              minHeight: "100vh",
              flex: "1",
              width: "20%",
            }}
          >
            <div
              style={{
                overflowY: "scroll",
                width: "100%",
                height: "100%",
                top: "0",
                position: "sticky",
              }}
            >
              {/* <Notifications /> */}
              <Activities activities={activities} />
            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}
