"use client";
import React, { useState } from "react";
import "./style.css";
import BackButton from "../../../../atoms/common/BackButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ChangePassword: React.FC = () => {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleContinueClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  return (
    <div className="change-password pt-sm-3">
      <form action="" className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <BackButton />
          <h4 className="text-md">Change Password</h4>
        </div>
        <button
            type="submit"
            className="btn-submit d-none d-sm-block"
            onClick={handleContinueClick}
          >
            Reset Password
          </button>
        </div>

        <div className="custom-card d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <label htmlFor="password" className="text-sm">
              Enter old password
            </label>
            <input type="password" />
          </div>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="password" className="text-sm">
              Enter new password
            </label>
            <input type="password" />
            <p className="text-sm-2">
              Your password should contain one Uppercase, a number, and special
              character.
            </p>
          </div>
          <div className="d-flex flex-column gap-2">
            <label htmlFor="password" className="text-sm">
              Confirm new password
            </label>
            <input type="password" />
          </div>

          <button
            type="submit"
            className="btn-submit d-sm-none"
            onClick={handleContinueClick}
          >
            Reset Password
          </button>
        </div>
      </form>
      {showConfirm && (
        <form action="">
          <div className="modal-backdrop">
            <div className="confirm-box d-flex flex-column gap-4">
              <div className="success-icon">
                <Image
                  src="/images/auth/succes-icon.png"
                  alt="icon"
                  className="icon"
                  width={22}
                  height={22}
                ></Image>
              </div>
              <div className="d-flex flex-column gap-1">
                <p className="text-md-2">Password Reset Successfully</p>
                <p className="text-sm-2">
                  Your password has been reset successfully, go back to log in
                  to log in with your new password.
                </p>
              </div>

              <button
                type="button"
                className="btn-confirm"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/authentication/signin");
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChangePassword;
