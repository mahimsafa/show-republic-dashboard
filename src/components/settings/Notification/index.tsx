/* eslint-disable no-redeclare */
"use client";
import React, { useState } from "react";
import Switch from "react-switch";
import "./style.css";

interface NotificationSettingsProps {
  variant?: "dashboard" | "web"; // Prop to differentiate between designs
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ variant = "web" }) => {
  const [pushNotification, setPushNotification] = useState(false);
  const [siteNotification, setSiteNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);

  const [dashboardPushNotification1, setDashboardPushNotification1] = useState(false);
  const [dashboardPushNotification2, setDashboardPushNotification2] = useState(false);
  const [dashboardEmailNotification1, setDashboardEmailNotification1] = useState(false);
  const [dashboardEmailNotification2, setDashboardEmailNotification2] = useState(false);
  

  const handlePushNotificationToggle = () => setPushNotification(!pushNotification);
  const handleSiteNotificationToggle = () => setSiteNotification(!siteNotification);
  const handleEmailNotificationToggle = () => setEmailNotification(!emailNotification);

  const handleDashboardPushNotification1 = () => setDashboardPushNotification1(!dashboardPushNotification1);
  const handleDashboardPushNotification2 = () => setDashboardPushNotification2(!dashboardPushNotification2);
  const handleDashboardEmailNotification1 = () => setDashboardEmailNotification1(!dashboardEmailNotification1);
  const handleDashboardEmailNotification2 = () => setDashboardEmailNotification2(!dashboardEmailNotification2);

  return (
    <div className={`notification ${variant}`}>
      <div className="custom-card d-flex flex-column gap-3">
        <h4 className="text-md">{variant === "dashboard" ? "" : "Preferences"}</h4>

        {/* Web Variant */}
        {variant === "web" && (
          <div className="ms-sm-2">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <div>
                <p className="text-md-2">Push Notification</p>
                <p className="text-sm">Get push notifications to stay updated when you’re not on the platform.</p>
              </div>
              <Switch
                checked={pushNotification}
                onChange={handlePushNotificationToggle}
                onColor="#6FA8FF"
                offColor="#7C8080"
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={16}
              />
            </div>
            <hr className="mt-2" />
          </div>
        )}

        {/* Dashboard Variant */}
        {variant === "dashboard" && (
          <div className="dashboard">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <div className="text">
                <p className="text-md-4">Log in activities</p>
                <p className="text-sm">These are notifications for log in with a new device.</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Switch
                  checked={dashboardPushNotification1}
                  onChange={handleDashboardPushNotification1}
                  onColor="#047857"
                  offColor="#7C8080"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={19}
                  width={34}
                  handleDiameter={14}
                />
                <span className="notification-control">Push</span>
                <Switch
                  checked={dashboardEmailNotification1}
                  onChange={handleDashboardEmailNotification1}
                  onColor="#047857"
                  offColor="#7C8080"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={19}
                  width={34}
                  handleDiameter={14}
                />
                <span className="notification-control">Email</span>
              </div>
            </div>
          </div>
        )}

        {/* Web Variant */}
        {variant === "web" && (
          <div className="ms-sm-2">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <div>
                <p className="text-md-2">Site Notification</p>
                <p className="text-sm">Set notifications for Post, Comment, and other activities.</p>
              </div>
              <Switch
                checked={siteNotification}
                onChange={handleSiteNotificationToggle}
                onColor="#6FA8FF"
                offColor="#7C8080"
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={16}
              />
            </div>
            <hr className="mt-2" />
          </div>
        )}

        {/* Dashboard Variant */}
        {variant === "dashboard" && (
          <div className="dashboard">
            <div className="d-flex align-items-center justify-content-between gap-3">
            <div className="text">
                <p className="text-md-4">Reminders</p>
                <p className="text-sm">These are notifications to remind you of updates you might have missed.</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Switch
                  checked={dashboardPushNotification2}
                  onChange={handleDashboardPushNotification2}
                  onColor="#047857"
                  offColor="#7C8080"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={19}
                  width={34}
                  handleDiameter={14}
                />
                <span className="notification-control">Push</span>
                <Switch
                  checked={dashboardEmailNotification2}
                  onChange={handleDashboardEmailNotification2}
                  onColor="#047857"
                  offColor="#7C8080"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={19}
                  width={34}
                  handleDiameter={14}
                />
                <span className="notification-control">Email</span>
              </div>
            </div>
          </div>
        )}

        {/* Web Variant */}
        {variant === "web" && (
          <div className="ms-sm-2">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <div>
                <p className="text-md-2">Email Notification</p>
                <p className="text-sm">Receive emails to stay updated.</p>
              </div>
              <Switch
                checked={emailNotification}
                onChange={handleEmailNotificationToggle}
                onColor="#6FA8FF"
                offColor="#7C8080"
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={16}
              />
            </div>
            <hr className="mt-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationSettings;
