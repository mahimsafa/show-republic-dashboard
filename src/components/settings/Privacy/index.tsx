"use client";
import React, { useState } from "react";
import "./style.css";
import Switch from "react-switch";
const PrivacySettings: React.FC = () => {
  const [availabilityStatus, setAvailabilityStatus] = useState(false);
  const [subscriptionOffers, setSubscriptionOffers] = useState(false);

  const handleAvailabilityToggle = () => {
    setAvailabilityStatus(!availabilityStatus);
  };

  const handleSubscriptionToggle = () => {
    setSubscriptionOffers(!subscriptionOffers);
  };

  return (
    <div className="privacy pt-sm-3">
      <div className="custom-card d-flex flex-column gap-3">
        <h4 className="text-md">Profile</h4>
        <div className="ms-sm-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div>
              <p className="text-md-2">Show Availability Status</p>
              <p className="text-sm">
                For creators only, allow brands to see if you are available for
                interview
              </p>
            </div>
            <Switch
              checked={availabilityStatus}
              onChange={handleAvailabilityToggle}
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
        <div className="ms-sm-2">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div>
              <p className="text-md-2">Show Subscription Offers</p>
              <p className="text-sm">
                Show user offers or discount you have set on your page (if any)
              </p>
            </div>

            <Switch
              checked={subscriptionOffers}
              onChange={handleSubscriptionToggle}
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
      </div>
    </div>
  );
};

export default PrivacySettings;
