/* eslint-disable @typescript-eslint/no-explicit-any */
import { get } from '../index';
import { AnalyticsData, AnalyticsQueryParams } from '../types/analytics.types';

// Function to convert an object to query string
const toQueryString = (params: Record<string, any>): string => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export const getAnalyticsData = async (
  query: AnalyticsQueryParams
): Promise<AnalyticsData> => {
  const queryString = toQueryString(query);
  return get(`analytics?${queryString}`).then((data) => data as AnalyticsData);
};
