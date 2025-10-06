import React from "react";
import "./style.css";
import BackButton from "../../../../atoms/common/BackButton";
const Authentication: React.FC = () => {
  return (
    <div className="authentication pt-sm-3">
      <form action="" className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <BackButton />
            <h4 className="text-md">Set-up 2 step authentication </h4>
          </div>
          <button type="submit" className="btn-submit d-none d-sm-block">
            Turn On
          </button>
        </div>
        <div className="custom-card d-flex flex-column gap-3">
          <p className="text-md">
            Protect your account with 2-step authentication{" "}
          </p>
          <div className="d-flex flex-column ms-sm-3 gap-2">
            <p className="text-sm">
              How do you want to get authentication codes?
            </p>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="call" name="auth-type" />
              <label htmlFor="call" className="text-sm">
                Phone call
              </label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="radio" id="message" name="auth-type" />
              <label htmlFor="msg" className="text-sm">
                Text message
              </label>
            </div>
          </div>
          <button type="submit" className="btn-submit d-sm-none">
            Turn On
          </button>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
