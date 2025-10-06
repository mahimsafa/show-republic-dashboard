  interface DashboardMenu {
    title: string;
    icon: string;
    icon_hover: string;
    icon_active: string;
    count: string | undefined;
    path: string;
  }
  export const dashboardMenus: DashboardMenu[] = [
    {
      title: "Dashboard",
      icon: "/icons/dashboard-icon.svg",
      icon_hover: "/icons/dashboard-icon.svg",
      icon_active: "/icons/dashboard-active-icon.svg",
      count: "",
      path: "/dashboard",
    },
    {
      title: "User Management",
      icon: "/icons/user-icon.svg",
      icon_hover: "/icons/user-icon.svg",
      icon_active: "/icons/user-active-icon.svg",
      count: "",
      path: "/user-management",
    },
    {
      title: "Admins",
      icon: "/icons/admin-icon.svg",
      icon_hover: "/icons/admin-icon.svg",
      icon_active: "/icons/admin-active-icon.svg",
      count: "",
      path: "/admins",
    },
    // {
    //   title: "Gamifications",
    //   icon: "/icons/gamification-icon.svg",
    //   icon_hover: "/icons/gamification-icon.svg",
    //   icon_active: "/icons/gamification-active-icon.svg",
    //   count: "",
    //   path: "/gamifications",
    // },
    {
      title: "Analytics",
      icon: "/icons/analytics-icon.svg",
      icon_hover: "/icons/analytics-icon.svg",
      icon_active: "/icons/analytics-active-icon.svg",
      count: "",
      path: "/analytics",
    },
    {
      title: "Settings",
      icon: "/icons/settings-icon.svg",
      icon_hover: "/icons/settings-icon.svg",
      icon_active: "/icons/settings-active-icon.svg",
      count: "",
      path: "/settings",
    },
  ];
  