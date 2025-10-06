"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
const AccountSettings: React.FC = () => {
  
  const account = {
    linkedAccount: [
      {
        title: "Profyll",
        description: "Profyll//Durgan26",
        path: "",
      },
      {
        title: "Google",
        description: "Herta.Durgan26@Gmail.com",
        path: "",
      },
      {
        title: "Facebook",
        description: "facebook//Durgan26",
        path: "",
      },
      {
        title: "x",
        description: "Twitter//Durgan26",
        path: "",
      },
    ],
    security: [
      {
        title: "Password",
        description: "Change Password",
        path: "/settings/changePassword",
      },
      {
        title: "Two Step Authentication",
        description: "Protect your account with two step authentication",
        path: "/settings/authentication",
      },
    ],
    management: [
      {
        title: "Delete my account",
        description: "Remove your account and details from ShowRepublic",
        path: "/settings/deleteAccount",
      },
    ],
  };

  return (
    <div className="account d-flex flex-column gap-3 pt-sm-3">
      <div className="custom-card d-flex flex-column gap-2">
        <h4 className="text-md">Linked Account</h4>
        {account.linkedAccount.map((acc) => (
          <div className="ms-sm-2" key={acc.title}>
            <Link
              href={acc.path}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <p className="text-md-2">{acc.title}</p>
                <p className="text-sm">{acc.description}</p>
              </div>
              <Image
                src="/images/common/arrow-right.png"
                alt=">"
                width={24}
                height={24}
              />
            </Link>
            <hr className="mt-2"/>
          </div>
        ))}
      </div>

      <div className="custom-card d-flex flex-column gap-2">
        <h4 className="text-md">Security</h4>
        {account.security.map((sec) => (
          <div className="ms-sm-2" key={sec.title}>
            <Link
              href={sec.path}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <p className="text-md-2">{sec.title}</p>
                <p className="text-sm">{sec.description}</p>
              </div>
              <Image
                src="/images/common/arrow-right.png"
                alt=">"
                width={24}
                height={24}
              />
            </Link>
            <hr className="mt-2"/>
          </div>
        ))}
      </div>

      <div className="custom-card d-flex flex-column gap-2">
        <h4 className="text-md">Account Management</h4>
        {account.management.map((man) => (
          <div className="ms-sm-2" key={man.title}>
            <Link
              href={man.path}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <p className="text-md-2">{man.title}</p>
                <p className="text-sm">{man.description}</p>
              </div>
              <Image
                src="/images/common/arrow-right.png"
                alt=">"
                width={24}
                height={24}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSettings;
