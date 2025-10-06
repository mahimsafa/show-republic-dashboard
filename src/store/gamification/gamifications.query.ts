import { useQuery, useMutation } from '@tanstack/react-query';
import { getGamifications, createGamification } from '@/services/routes/gamifications.route';
import { GamificationData, GamificationInput, GamificationResponse } from '@/services/types/gamifications.types';

// Fetch all gamifications
export const useGetGamifications = () => {
  return useQuery<GamificationData[]>({
    queryKey: ['gamifications'],
    queryFn: getGamifications,
  });
};

// Mutation to create a new gamification
export const useCreateGamification = () => {
  return useMutation<GamificationResponse, Error, GamificationInput>({
    mutationFn: (payload: GamificationInput) => createGamification(payload),
  });
};
