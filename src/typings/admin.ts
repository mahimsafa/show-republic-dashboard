export interface IAdmin {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    emailVerified: boolean;
    profilePicture: string | null;
    gender: string | null;
    location: string | null;
    mobile: string | null;
    dateOfBirth: string | null;
    hireDate: string | null;
    nationality: string | null;
    maritalStatus: string | null;
    state: string | null;
    city: string | null;
    address: string | null;
    postalCode: string | null;
    timezone: string | null;
    jobTitle: string | null;
    jobType: string;
    workLocation: string | null;
    salary: string | null;
    isActive: boolean;
    isProfileCompleted: boolean;
    createdAt: string;
    updatedAt: string;
}