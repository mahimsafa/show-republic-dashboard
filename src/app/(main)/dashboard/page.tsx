import DashboardPage from "@/modules/dashboard/DashboardPage";
import client from "@/lib/fetch-client";
import { getAdmin } from "@/lib/api/server/admin";

async function getData() {
  try {
    const data = await client.get("api/v1/admin/dashboard");
    return data;
  } catch (error) {
    return null;
  }
}

const Dashboard = async () => {
  const data = await getData();
  const admin = await getAdmin();

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="flex justify-between">
      <DashboardPage data={data} admin={admin} />
    </div>
  );
};

export default Dashboard;
