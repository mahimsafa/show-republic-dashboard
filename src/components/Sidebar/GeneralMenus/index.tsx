/* eslint-disable no-redeclare */
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./style.css";
// import { Icon, UserProfile } from "@repo/common";
import Link from "next/link";
import { IconType } from "react-icons";
import Icon from "@/components/common/Icon";
import UserProfile from "@/components/UserProfile";

interface Menu {
  title: string;
  icon: IconType;
  icon_hover: IconType;
  icon_active: IconType;
  count: string | undefined;
  path: string;
}
interface StoreItem {
  id: string;
  img: string;
  title: string;
  delivery: string;
  company: string;
}

interface Playlist {
  img: string;
  icon: string;
  title: string;
  views: string;
  time: string;
}

interface UserProfile {
  id: string;
  banner: string;
  profile: string;
  name: string;
  email: string;
  category: string;
  date: string;
  description: string;
  username: string;
  subscribers: string;
  videos: string;
  website: string;
  location: string;
  mobile: string;
  store: StoreItem[];
  playlists: Playlist[];
}
interface GeneralMenuProps {
  menus: Menu[];
  user: UserProfile;
}

const GeneralMenus: React.FC<GeneralMenuProps> = ({ user, menus }) => {
  const currentPath = usePathname();
  
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(currentPath);

  const handleMouseEnter = (path: string) => {
    setHoveredMenu(path);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const handleClick = (path: string) => {
    setActiveMenu(path);
  };

  useEffect(() => {
    console.log("Current Path on Vercel:", currentPath);
    setActiveMenu(currentPath);
  }, [currentPath]);
  
  
  return (
    <>
      <div className="general-sidebar d-flex flex-column gap-3">
        <UserProfile img={user.profile} name={user.name} email={user.email} />
        <div>
          <ul className="menus d-flex flex-column gap-1 ps-0">
            {menus.map((menu) => {
              const isHovered = hoveredMenu === menu.path;
              const isActive = activeMenu === menu.path;
              return (
                <li key={menu.title}>
                  <Link
                    href={menu.path}
                    className={`${menu.title==="Create New" ? "add-btn" : "menu"} d-flex align-items-center gap-3 ps-3 ${currentPath==="/create" ? "" : currentPath===menu.path ? "link-active" : ""}`}
                    onMouseEnter={() => handleMouseEnter(menu.path)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(menu.path)}
                  >
                    {isActive ? (
                      <Icon type={menu.icon_active} size={30} />
                    ) : isHovered ? (
                      <Icon type={menu.icon_hover} size={30} />
                    ) : (
                      <Icon type={menu.icon} size={30} />
                    )}

                    <span>{menu.title}</span>
                    {menu.count && (
                      <span className="updates d-flex align-items-center justify-content-center">
                        {menu.count}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GeneralMenus;
