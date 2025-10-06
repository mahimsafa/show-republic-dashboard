/* eslint-disable no-redeclare */
"use client";
import React from "react";
import { notifications } from "@repo/common/src/data/dashboard-notification";
import Card from "@repo/common/src/components/atoms/Card";
import "./style.css";

const Notifications: React.FC = () => {
  return (
    <div className="notifications-container">
      <h2 className="section-title">Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id}>
            <Card
              image={notification.userImg}
              title={notification.title}
              description={notification.message}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
