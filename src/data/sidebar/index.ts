import {
    IoAddCircleOutline,
    IoAddCircleSharp,
    IoCardOutline,
    IoCardSharp,
    IoHomeOutline,
    IoHomeSharp,
    IoNotificationsOutline,
    IoNotificationsSharp,
    IoPersonOutline,
    IoPersonSharp,
  } from "react-icons/io5";
  import { IconType } from "react-icons";
  
  interface GeneralMenu {
    title: string;
    icon: IconType;
    icon_hover: IconType;
    icon_active: IconType;
    count: string | undefined;
    path: string;
  }
  export const generalMenus: GeneralMenu[] = [
    {
      title: "Dashboard",
      icon: IoHomeOutline,
      icon_hover: IoHomeOutline,
      icon_active: IoHomeSharp,
      count: "",
      path: "/",
    },
    {
      title: "User Management",
      icon: IoPersonOutline,
      icon_hover: IoPersonOutline,
      icon_active: IoPersonSharp,
      count: "",
      path: "/user-management",
    },
    {
      title: "Admins",
      icon: IoCardOutline,
      icon_hover: IoCardOutline,
      icon_active: IoCardSharp,
      count: "",
      path: "/admins",
    },
    {
      title: "Gamification",
      icon: IoNotificationsOutline,
      icon_hover: IoNotificationsOutline,
      icon_active: IoNotificationsSharp,
      count: "8",
      path: "/gamification",
    },
    {
      title: "Analytics",
      icon: IoAddCircleOutline,
      icon_hover: IoAddCircleSharp,
      icon_active: IoAddCircleSharp,
      count: "",
      path: "/analytics",
    },
    {
        title: "Settings",
        icon: IoAddCircleOutline,
        icon_hover: IoAddCircleSharp,
        icon_active: IoAddCircleSharp,
        count: "",
        path: "/settings",
      },
  ];
  