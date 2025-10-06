// import create from "zustand";
// import { User } from "../../services/types/user.types";

// interface UserManagementState {
//   // Current authenticated user
//   authenticatedUser: User | null;
  
//   // Selected user for management
//   selectedUser: User | null;

//   // Methods to set and clear the authenticated user
//   setAuthenticatedUser: (user: User) => void;
//   clearAuthenticatedUser: () => void;

//   // Methods to set and clear the selected user
//   setSelectedUser: (user: User) => void;
//   clearSelectedUser: () => void;
// }

// const useUserManagementStore = create<UserManagementState>((set: (arg0: { authenticatedUser?: any; selectedUser?: any; }) => any) => ({
//   authenticatedUser: null,
//   selectedUser: null,

//   // Set the authenticated user
//   setAuthenticatedUser: (user: any) => set({ authenticatedUser: user }),

//   // Clear the authenticated user
//   clearAuthenticatedUser: () => set({ authenticatedUser: null }),

//   // Set the selected user
//   setSelectedUser: (user: any) => set({ selectedUser: user }),

//   // Clear the selected user
//   clearSelectedUser: () => set({ selectedUser: null }),
// }));

// export default useUserManagementStore;
