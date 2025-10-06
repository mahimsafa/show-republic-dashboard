/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    del as delConfig,
    get as getConfig,
    patch as patchConfig,
    post as postConfig,
    put as putConfig,
    postFormData as postFormDataConfig,
  } from './global.service';
  
  export const DEV_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
  
  const defaultHeaders = {
    ApiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
  };
  
  const getEndpoint = (endpoint: string, query?: Record<string, string>) => {
    if (query) {
      const queryString = new URLSearchParams(query).toString();
      return `${endpoint}?${queryString}`;
    }
    return endpoint;
  };
  
  export const get = async <T>(
    endpoint: string,
    headers?: Record<string, string>,
    query?: Record<string, string>
  ): Promise<T> => {
    return getConfig(getEndpoint(`${DEV_ENDPOINT}/${endpoint}`, query), {
      ...defaultHeaders,
      ...headers,
    });
  };
  
  export const post = async <T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>,
    query?: Record<string, string>
  ): Promise<T> => {
    return postConfig(getEndpoint(`${DEV_ENDPOINT}/${endpoint}`, query), data, {
      ...defaultHeaders,
      ...headers,
    });
  };
  
  export const postFormData = async <T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>,
    query?: Record<string, string>
  ): Promise<T> => {
    return postFormDataConfig(
      getEndpoint(`${DEV_ENDPOINT}/${endpoint}`, query),
      data,
      {
        ...defaultHeaders,
        ...headers,
      }
    );
  };
  
  export const put = async <T>(
    endpoint: string,
    data: any,
    query?: Record<string, string>,
    headers?: Record<string, string>
  ): Promise<T> => {
    return putConfig(getEndpoint(`${DEV_ENDPOINT}/${endpoint}`, query), data, {
      ...defaultHeaders,
      ...headers,
    });
  };
  
  export const del = async <T>(
    endpoint: string,
    query?: Record<string, string>,
    headers?: Record<string, string>
  ): Promise<T> => {
    return delConfig(getEndpoint(`${DEV_ENDPOINT}/${endpoint}`, query), {
      ...defaultHeaders,
      ...headers,
    });
  };
  
  export const patch = async <T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>,
    query?: Record<string, string>
  ): Promise<T> => {
    return patchConfig(getEndpoint(`${DEV_ENDPOINT}/${endpoint}`, query), data, {
      ...defaultHeaders,
      ...headers,
    });
  };
  