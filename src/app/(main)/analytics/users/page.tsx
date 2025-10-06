"use client";
import AnalyticsUsersPage from "@/modules/analytics/users/AnalyticsUsersPage";

const Analytics = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between">
          <AnalyticsUsersPage />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
