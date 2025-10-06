// @ts-ignore
import profile1 from "../../assets/images/Sidebar/Male.svg";
// @ts-ignore
import profile2 from "../../assets/images/Sidebar/Female.svg"
// @ts-ignore
import profile3 from "../../assets/images/Sidebar/3D05.svg"
// @ts-ignore
import profile4 from "../../assets/images/Sidebar/Male11.svg"

interface Notification {
  id: string;
  title: string;
  message: string;
  status: string;
  userImg: string;
}

export const notifications: Notification[] = [
  {
    id: "1", 
    title: "Activity Approval", 
    message: 'New brand "EcoClothing" has requested to join the platform.', 
    status: "green", 
    userImg: profile1.src
  },
  { id: "2", 
    title: "Unusual Behavior",
    message: "Multiple logins detected for @user808.", 
    status: "yellow", 
    userImg: profile2.src
  },
  { 
    id: "3", 
    title: "Account Issue", 
    message: "@user789 has requested a password reset.", 
    status: "red", 
    userImg: profile3.src
  },
  { 
    id: "4", 
    title: "High Engagement",
    message: 'Video "Top 10 Travel Destinations" by @travelguru has received multiple likes.', 
    status: "purple", 
    userImg: profile4.src
  },
];
