import client from "@/lib/fetch-client";
import AnalyticPage from "@/modules/analytics/AnalyticPage";

async function getData() {
  try {
    const { data }: any = await client.get("api/v1/admin/analytics");
    return data;
  } catch (error) {
    return null;
  }
}

const Analytics = async () => {
  const data = await getData();

  if (!data) {
    return <div>Unable to load data</div>;
  }

  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between">
          <AnalyticPage data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
