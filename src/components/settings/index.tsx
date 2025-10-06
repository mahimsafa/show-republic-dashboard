"use client"

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import "./style.css";

type Tab = {
  name: string;
  path: string;
};

interface SettingsProps {
  tabs: Tab[];
}

const Settings: React.FC<SettingsProps> = ({ tabs }) => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="settings">
      <div className="tabs-container d-flex gap-2 flex-wrap flex-sm-nowrap mx-sm-3 mb-3 mb-sm-0">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            className={`tab ${currentPath === tab.path ? "active" : ""}`}
            onClick={() => router.push(tab.path)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <hr className="d-none d-sm-block" />
    </div>
  );
};

export default Settings;
