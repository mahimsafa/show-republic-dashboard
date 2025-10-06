/* eslint-disable no-redeclare */
"use client";
import UserProfile from "@/components/UserProfile";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import './style.css';

interface Menu {
  title: string;
  icon: string;
  icon_hover: string;
  icon_active: string;
  path: string;
  count?: string;
}

interface UserProfile {
  id?: string;
  profilePicture: string;
  name: string;
  email: string;
}

interface Props {
  user: UserProfile;
  menuItems: Menu[];
}

const DashboardSidebar: React.FC<Props> = ({ user, menuItems }) => {
  const currentPath = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(currentPath);

  useEffect(() => {
    setActiveMenu(currentPath);
  }, [currentPath]);

  return (
    <div className="sidebar d-flex flex-column gap-2">
      <Link href="/dashboard">
        <Logo />
      </Link>

      <UserProfile img={user.profilePicture} name={user.name} email={user.email} />

      <nav>
        <ul>
          {menuItems.map((menu, index) => {
            const isHovered = hoveredMenu === menu.path;
            const isActive = currentPath.startsWith(menu.path);

            return (
              <li key={index}>
                <Link
                  href={menu.path}
                  className={`menu-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredMenu(menu.path)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <img
                    src={isActive ? menu.icon_active : isHovered ? menu.icon_hover : menu.icon}
                    alt={`${menu.title} icon`}
                    width="24"
                    height="24"
                  />
                  <span className="title">{menu.title}</span>
                  {menu.count && <span className="count">{menu.count}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="logout">
        {/* <Link href="/api/auth/logout" className="menu-item">
          <CiLogout size={20} color="red" className="icon" />
          <span className="text">Logout</span>
        </Link> */}
      </div>
    </div>
  );
};

export default DashboardSidebar;
