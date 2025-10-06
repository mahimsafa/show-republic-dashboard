export interface AnalyticsData {
    userCount: number;
    activeUsers: number;
    totalSales: number;
    newUsers: number;
    dateRange: string[];
  }
  
  export interface AnalyticsQueryParams {
    startDate: string;
    endDate: string;
  }
  