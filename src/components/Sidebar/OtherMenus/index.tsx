/* eslint-disable no-redeclare */
"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import "./style.css";
import { IoSunnyOutline } from "react-icons/io5";
// import { Icon, ThemeContext, UserProfile } from "@repo/common";
import { IconType } from "react-icons";
import { ThemeContext } from "@/components/ThemeProvider";
import UserProfile from "@/components/UserProfile";
import Icon from "@/components/common/Icon";

interface Menu {
  title: string;
  icon: IconType;
  icon_hover: IconType;
  icon_active: IconType;
  count: string | undefined;
  path: string;
}
interface OtherMenu {
  basic_menus: Menu[];
  other_menus: Menu[];
  logout: Menu;
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
interface Props {
  menus: OtherMenu[];
  user: UserProfile;
}
const OtherMenus: React.FC<Props> = ({ menus, user }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentPath = usePathname();
  const getLinkClassName = (path: string) =>
    currentPath === path ? "link-active" : "";

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

  return (
    <>
      <div className="other-menu d-flex flex-column gap-1">
        <div className="d-flex flex-column gap-2">
          <UserProfile
            img={user.profile}
            name={user.name}
            email={user.email}
            subscribers={user.subscribers}
            likes="500k"
          />
        </div>
        {menus.map((menuGroup, index) => (
          <div key={index}>
            <ul
              className="menus d-flex flex-column pb-3 ps-0"
              style={{ borderBottom: "1px solid var(--border-color)" }}
            >
              {menuGroup.basic_menus.map((menu) => {
                const isHovered = hoveredMenu === menu.path;
                const isActive = activeMenu === menu.path;

                return (
                  <li key={menu.title}>
                    <Link
                      href={menu.path}
                      className={`menu d-flex align-items-center gap-3 px-3 py-2 ${getLinkClassName(
                        menu.path
                      )}`}
                      onMouseEnter={() => handleMouseEnter(menu.path)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick(menu.path)}
                    >
                      {isActive ? (
                        <Icon type={menu.icon_hover} size={16} />
                      ) : isHovered ? (
                        <Icon type={menu.icon} size={16} />
                      ) : (
                        <Icon type={menu.icon} size={16} />
                      )}

                      <span>{menu.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul
              className="menus d-flex flex-column ps-0 pb-3"
              style={{ borderBottom: "1px solid var(--border-color)" }}
            >
              {menuGroup.other_menus.map((menu) => {
                const isHovered = hoveredMenu === menu.path;
                const isActive = activeMenu === menu.path;

                return (
                  <li key={menu.title}>
                    {menu.title === "Dark Mode" && (
                      <button
                        className={`menu d-flex align-items-center gap-3 px-3 py-2 border-0`}
                        onClick={toggleTheme}
                      >
                        {theme === "dark" ? (
                          <Icon type={IoSunnyOutline} size={16} />
                        ) : isActive ? (
                          <Icon type={menu.icon_hover} size={16} />
                        ) : isHovered ? (
                          <Icon type={menu.icon} size={16} />
                        ) : (
                          <Icon type={menu.icon} size={16} />
                        )}

                        <span>
                          {theme === "dark" ? "Light Mode" : menu.title}
                        </span>
                      </button>
                    )}
                    {menu.title !== "Dark Mode" && (
                      <Link
                        href={menu.path}
                        className={`menu d-flex align-items-center gap-3 px-3 py-2 ${getLinkClassName(
                          menu.path
                        )}`}
                        onMouseEnter={() => handleMouseEnter(menu.path)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(menu.path)}
                      >
                        {isActive ? (
                          <Icon type={menu.icon_hover} size={16} />
                        ) : isHovered ? (
                          <Icon type={menu.icon} size={16} />
                        ) : (
                          <Icon type={menu.icon} size={16} />
                        )}

                        <span>{menu.title}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="menus">
              <Link
                href={menuGroup.logout.path}
                className={`logout d-flex align-items-center gap-3 px-3 py-2 ${getLinkClassName(
                  menuGroup.logout.path
                )}`}
                onMouseEnter={() => handleMouseEnter(menuGroup.logout.path)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(menuGroup.logout.path)}
              >
                {activeMenu === menuGroup.logout.path ? (
                  <Icon type={menuGroup.logout.icon_hover} size={16} />
                ) : hoveredMenu === menuGroup.logout.path ? (
                  <Icon type={menuGroup.logout.icon} size={16} />
                ) : (
                  <Icon type={menuGroup.logout.icon} size={16} />
                )}

                <span>{menuGroup.logout.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherMenus;
