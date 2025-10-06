import profile from "../../../public/images/avatar.webp";

interface UserProfile {
  profileImg: string;
  name: string;
  employeeId: string;
  role: string;
  gender: string;
  dob: string;
  hireDate: string;
  jobType: string;
  fullName: string;
  nationality: string;
  maritalStatus: string;
  state: string;
  city: string;
  timeZone: string;
  position: string;
  workLocation: string;
  workEmail: string;
  salary: string;
  personalEmail: string;
  phoneNumber: string;
  postalCode: string;
  address: string;
}


// Data for the profile page
export const userProfile: UserProfile = {
  profileImg: profile.src,
  name: "Richard Obaro",
  employeeId: "Colab12345",
  role: "Marketing",
  gender: "Male",
  dob: "10th May 2000",
  hireDate: "09th May 2022",
  jobType: "Contract",
  fullName: "Richard Adedeji Obaro",
  nationality: "Nigerian",
  maritalStatus: "Single",
  state: "Ontario",
  city: "Ottawa",
  timeZone: "North America/Canada",
  position: "Marketer",
  workLocation: "Remote",
  workEmail: "richard@colab.com",
  salary: "$2500",
  personalEmail: "obaroricheese@gmail.com",
  phoneNumber: "+234 7061548319",
  postalCode: "GHT 07647",
  address: "This is your address placeholder",
};

export default userProfile;

