"use client";
import React, { useState } from "react";
import "./style.css";
import BackButton from "../../../../atoms/common/BackButton";

const Reason: React.FC = () => {

  const [showConfirm, setShowConfirm] = useState(false);

  const handleContinueClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleCancelClick = () => {
    setShowConfirm(false);
  };

  return (
    <div className="reason-form position-relative pt-sm-3">
      <form className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <BackButton />
            <h4 className="text-md">Delete your account</h4>
          </div>
          <button className="continue-btn d-none d-sm-block" onClick={handleContinueClick}>
            Continue
          </button>
        </div>
        <div className="custom-card d-flex flex-column gap-3">
          <p className="text-md">We are sad to see you go.</p>
          <div className="d-flex flex-column ms-sm-3 gap-3">
            <p className="text-sm">
              Tell us the reason to closing your account
            </p>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="duplicate" name="reason" />
              <label htmlFor="duplicate" className="text-sm">I have a duplicate account</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="cyberbullying" name="reason" />
              <label htmlFor="cyberbullying" className="text-sm">Cyberbullying</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="privacy" name="reason" />
              <label htmlFor="privacy" className="text-sm">I have a privacy concern</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="changes" name="reason" />
              <label htmlFor="changes" className="text-sm">Platform Changes or Controversies</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="interest" name="reason" />
              <label htmlFor="interest" className="text-sm">Lack of Interest or Engagement</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="other" name="reason" />
              <label htmlFor="other" className="text-sm">Other</label>
            </div>
            <p className="text-sm">
              Please provide more information to help us improve.
            </p>
            <div className="d-flex flex-column gap-2">
              <label htmlFor="reason-details" className="text-sm">Tell us your reason</label>
              <textarea
                name="reason-details"
                id="reason-details"
                rows={5}
                placeholder="Enter a description..."
              ></textarea>
            </div>
          </div>
          <button className="continue-btn d-sm-none" onClick={handleContinueClick}>
            Continue
          </button>
        </div>
      </form>
      {showConfirm && (
        <form action="">
          <div className="modal-backdrop">
            <div className="confirm-box d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-1">
                <h4 className="text-md-2">
                  Are you sure you want to delete your account?
                </h4>
                <p className="text-sm-2">
                  This action is permanent and cannot be undone. Deleting your
                  account will permanently remove your profile and all
                  associated data.
                </p>
              </div>
              <div className="d-flex justify-content-sm-end">
                <div className="d-flex gap-2 flex-wrap">
                  <button className="btn-cancel" onClick={handleCancelClick}>
                    No, Cancel
                  </button>
                  <button className="btn-confirm" onClick={handleCancelClick}>
                    Yes, Delete My Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Reason;
