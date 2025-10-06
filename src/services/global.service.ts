/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const defaultTimeout: number = parseInt(
  process.env.NEXT_API_TIMEOUT ?? '60000',
  10
);

export const getDefaultHeaders = () => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  const token = Cookies.get('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

export const getFormDataHeaders = () => {
  const headers: Record<string, any> = {};
  const token = Cookies.get('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || '';
  const isBinary = contentType.includes('application/octet-stream');
  const isJson = contentType.includes('application/json');
  let data;

  if (isBinary) data = response;
  else {
    data = isJson ? await response.json() : await response.text();
  }

  if (!response.ok) {
    if (response.status === 401) {
      toast(data.message, { type: 'error' });
      Cookies.remove('token');
      Cookies.remove('refreshToken');
    }
    throw new Error(data.message || response.statusText, {
      cause: response.status,
    });
  }
  return data as T;
}

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout = 60000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export const cleanData = (data: { [key: string]: any } | undefined): any => {
  if (!Object.keys(data || {}).length) return data;

  const newData = {} as { [key: string]: any };

  for (const key in data) {
    if (data.hasOwnProperty(key) && !['', null, undefined].includes(data[key]))
      newData[key] = data[key];
  }

  return newData;
};

// Utility function for making GET requests
export const get = async <T>(
  endpoint: string,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: 'GET',
        headers: { ...getDefaultHeaders(), ...headers },
      },
      defaultTimeout
    );
    return handleResponse(response) as T;
  } catch (error) {
    // Handle network or other errors here
    console.error('An error occurred:', error);

    return {
      error: 'An error occurred while making the request.',
    } as T;
  }
};

// Utility function for making POST requests
export const post = async <T>(
  endpoint: string,
  data?: any,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: 'POST',
        headers: { ...getDefaultHeaders(), ...headers },
        body: JSON.stringify(cleanData(data)),
      },
      defaultTimeout
    );
    return handleResponse(response) as T;
  } catch (error) {
    // Handle network or other errors here
    console.error('An error occurred:', error);
    return {
      error: 'An error occurred while making the request.',
    } as T;
  }
};

export const postFormData = async <T>(
  endpoint: string,
  data?: FormData,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: 'POST',
        headers: { ...getFormDataHeaders(), ...headers },
        body: data,
      },
      defaultTimeout
    );
    return handleResponse(response) as T;
  } catch (error) {
    // Handle network or other errors here
    console.error('An error occurred:', error);
    return {
      error: 'An error occurred while making the request.',
    } as T;
  }
};

export const patch = async <T>(
  endpoint: string,
  data?: any,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: 'PATCH',
        headers: { ...getDefaultHeaders(), ...headers },
        body: JSON.stringify(cleanData(data)),
      },
      defaultTimeout
    );
    return handleResponse(response) as T;
  } catch (error) {
    // Handle network or other errors here
    console.error('An error occurred:', error);
    return {
      error: 'An error occurred while making the request.',
    } as T;
  }
};

// Utility function for making PUT requests
export const put = async <T>(
  endpoint: string,
  data: any,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: 'PUT',
        headers: { ...getDefaultHeaders(), ...headers },
        body: JSON.stringify(cleanData(data)),
      },
      defaultTimeout
    );

    return handleResponse(response) as T;
  } catch (error) {
    // Handle network or other errors here
    console.error('An error occurred:', error);
    return {
      error: 'An error occurred while making the request.',
    } as T;
  }
};

// Utility function for making DELETE requests
export const del = async <T>(
  endpoint: string,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithTimeout(
      endpoint,
      {
        method: 'DELETE',
        headers: { ...getDefaultHeaders(), ...headers },
      },
      defaultTimeout
    );
    return handleResponse(response) as T;
  } catch (error) {
    // Handle network or other errors here
    console.error('An error occurred:', error);
    return {
      error: 'An error occurred while making the request.',
    } as T;
  }
};
