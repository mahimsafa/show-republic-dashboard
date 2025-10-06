import React, { useState } from "react";
import "./style.css";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FaPencilAlt } from "react-icons/fa";

const SecuritySettings = () => {
  const [password, setPassword] = useState("**********");
  const [isEditing, setIsEditing] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="security-container">
      {isEditing ? ( <h2>Edit Password</h2> ) : (
        <h2 className="security-text">Update Password</h2>
      )}

      {isEditing ? (
        <div className="edit-password-section">
          <span>Old Password</span>
          <Input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            className="password-input"
          />
          <span>New Password</span>
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="password-input"
          />
          <span>Confim New Password</span>
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={handleConfirmNewPasswordChange}
            className="password-input"
          />

          <div className="button-section">
            <Button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="update-btn">
              Update
            </Button>
          </div>
        </div>
      ) : (
        <>
        <div className="password-section">
          <div className="input-wrapper">
            <Input
              type="password"
              value={password}
              // disabled={true}
              className="password-input"
            />
            <div className="edit-security-icon" onClick={toggleEditing}>
              <FaPencilAlt /><span>Edit</span>
            </div>
          </div>
        </div>
        <div className="two-factor-section">
          <h2 className="security-text">Two Factor Authentication</h2>
          <div className="two-factor-enable">
            <p className="two-factor-enable-text">
              Enable two factor authentication
            </p>
            <Button
              className={`two-factor-btn ${twoFactorEnabled ? "enabled" : ""}`}
              onClick={toggleTwoFactor}
            >
              {twoFactorEnabled ? "DISABLE" : "ENABLE"}
            </Button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default SecuritySettings;
