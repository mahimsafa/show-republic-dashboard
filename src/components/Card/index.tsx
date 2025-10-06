/* eslint-disable no-redeclare */
import "./style.css";
import React from "react";
import Image from "next/image";
import { formatRelative } from "date-fns";

const Card = ({ activity }) => {
  return (
    <div className="custom-card">
      {/* {icon && <span className="status-icon">{icon}</span>} */}
      <Image
        src={activity?.image || "/images/avatar.webp"}
        alt="image"
        width={12}
        height={12}
        className="rounded-circle"
      />
      <div className="card-content">
        <h6 className="card-title" style={{ fontSize: "12px" }}>
          {activity?.activity}
        </h6>
        <p className="card-description" style={{ fontSize: "10px" }}>
          {activity?.message} by{" "}
          <span style={{ fontWeight: "bold" }}>{activity?.admin}</span>
        </p>
        <div
          className="card-time"
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {formatRelative(activity?.createdAt, new Date())}
        </div>
      </div>
    </div>
  );
};

export default Card;
