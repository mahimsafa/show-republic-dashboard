import { get, post } from '../index';
import { GamificationData, GamificationInput, GamificationResponse } from '../types/gamifications.types';

export const getGamifications = async (): Promise<GamificationData[]> => {
  return get('gamifications').then((data) => data as GamificationData[]);
};

export const createGamification = async (
  payload: GamificationInput
): Promise<GamificationResponse> => {
  return post('gamifications', payload).then((data) => data as GamificationResponse);
};
