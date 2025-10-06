"use client"
import React from "react";
import "./style.css";
import BackButton from "../../../../atoms/common/BackButton";
import { useRouter } from "next/navigation";
const DeleteAccount: React.FC = () => {
  const router = useRouter();
  return (
    <div className="delete-account pt-sm-3">
      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <BackButton />
            <h4 className="text-md">Delete your account</h4>
          </div>
          <button className="continue-btn d-none d-sm-block" onClick={()=> router.push("/settings/reason")}>
            Continue
          </button>
        </div>
        <div className="custom-card d-flex flex-column gap-3">
          <p className="text-md">Deleting your account?</p>
          <ul className="d-flex flex-column gap-2 mb-0">
            <li className="text-sm">
              Deleting your account will permanently remove your profile and all
              associated data.
            </li >
            <li className="text-sm">This includes [videos, promotions, analytics, etc.].</li>
            <li className="text-sm">
              You won&apos;t be able to recover your account or data once it&apos;s
              deleted.
            </li>
            <li className="text-sm">You cant delete Account with cash or tokens in your wallet</li>
          </ul>
          <button className="continue-btn d-sm-none" onClick={()=> router.push("/settings/reason")}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
