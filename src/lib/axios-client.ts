import axios from "axios";
import { getAuthToken } from "./auth";

// 1. Create the Axios instance with a base configuration.
// The baseURL will be automatically prepended to all request URLs.
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to read cookie values on the client
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${encodeURIComponent(name)}=`));
  if (!match) return null;
  try {
    return decodeURIComponent(match.split("=")[1] || "");
  } catch {
    return match.split("=")[1] || null;
  }
};

// 2. Use a request interceptor to dynamically add headers to every request.
// This function will run BEFORE each request is sent.
client.interceptors.request.use(
  (config) => {
    // We can only access cookies on the client-side.
    if (typeof window !== "undefined") {
      // Read from cookies instead of localStorage
      const token = getAuthToken();
      const userId = getCookie("userId");

      // If a token exists, add it to the Authorization header.
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // If a userId exists, add it to the custom 'x-user-id' header.
      if (userId) {
        config.headers["x-user-id"] = userId;
      }
    }
    
    // Important: return the config object for the request to proceed
    return config;
  },
  (error) => {
    // This function handles errors that occur before the request is sent.
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 3. (Optional but recommended) Use a response interceptor to handle responses globally.
// This allows you to process data or handle errors from one central location.
client.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx will trigger this function.
    // Here, we simply return the response data.
    // console.log(response.data, "API response");
    return response.data;
  },
  (error) => {
    // Any status codes outside the range of 2xx will trigger this function.
    // This is a great place for global error handling.
    if (axios.isAxiosError(error) && error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx.
      console.error("API Error Response:", error.response.data);
      // Instead of returning the error data, we reject the promise.
      // This allows you to use .catch() in your components.
      return Promise.reject(error.response.data);
    }
    
    console.error("Unexpected Error:", error);
    return Promise.reject(new Error("An unexpected error occurred"));
  }
);

export default client;

/*
  // HOW TO USE IT IN YOUR COMPONENTS/PAGES:

  import client from './path/to/your/client';

  // Example GET request
  const fetchUsers = async () => {
    try {
      const users = await client.get('/users'); // route is '/users'
      console.log(users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  // Example POST request
  const createUser = async (userData) => {
    try {
      const newUser = await client.post('/users', userData); // route is '/users', body is userData
      console.log('User created:', newUser);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };
*/
