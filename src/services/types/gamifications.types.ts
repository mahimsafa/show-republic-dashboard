export interface GamificationData {
    id: string;
    title: string;
    description: string;
    points: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface GamificationInput {
    title: string;
    description: string;
    points: number;
  }
  
  export interface GamificationResponse {
    message: string;
    data: GamificationData;
  }
  