"use client";
import { useRouter } from "next/navigation";
import { ChallengeCounters, ChallengeList, ChallengeVerticalList } from "@repo/common";

const GamificationsPage: React.FC = () => {
  const router = useRouter();

  const handleAddChallenge = () => {
    router.push("/gamifications/add-challenge");
  };

  return (
    <>
      <ChallengeCounters
        totalChallenges={56}
        activeChallenges={32}
        completedChallenges={45}
        onAddChallenge={handleAddChallenge}
      />
      <ChallengeList />
      <ChallengeVerticalList />
    </>
  );
};

export default GamificationsPage;
