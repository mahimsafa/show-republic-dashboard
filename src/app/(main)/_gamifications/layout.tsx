"use client";
import { Divider, Header } from "@repo/common";
import { userProfile } from "@/data/profile";
import { liveSubscriptions } from "@/data/sidebar/liveSubscriptions";
import { useRouter, usePathname } from "next/navigation";

export default function GamificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = userProfile;
  const subscriptions = liveSubscriptions;
  const router = useRouter();
  const pathname = usePathname();

  const isAllUpcomingChallengesPage = pathname === "/gamifications/all-upcoming-challenges";

  const isAllChallengesPage = pathname === "/gamifications/all-challenges";

  const isAddChallengesPage = pathname === "/gamifications/add-challenge";

  const handleBackNavigation = () => {
    router.back();
  };

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col custom-settings-layout">
        <div className="p-1 p-sm-2">
          <Header
            title={isAllUpcomingChallengesPage ? "Upcoming Schedule" : "Gamification"}
            user={user}
            liveSubscriptions={subscriptions}
            headerClassName="custom-dashboard-header"
            searchbarClassName="custom-dashboard-searchbar"
            backButton={isAllUpcomingChallengesPage || isAllChallengesPage || isAddChallengesPage}
            onBackClick={handleBackNavigation}
          />
        </div>
        <Divider />
        <div className="gamifications-page bg-[#FFFFFF] flex-grow h-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
