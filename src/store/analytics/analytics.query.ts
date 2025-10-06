import { useQuery } from '@tanstack/react-query';
import { getAnalyticsData } from '@/services/routes/analytics.route';
import { AnalyticsData, AnalyticsQueryParams } from '@/services/types/analytics.types';

export const useGetAnalyticsData = (query: AnalyticsQueryParams) => {
  return useQuery<AnalyticsData>({
    queryKey: ['analytics-data', query],
    queryFn: () => getAnalyticsData(query),
  });
};
