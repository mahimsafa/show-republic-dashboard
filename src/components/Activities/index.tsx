/* eslint-disable no-redeclare */
"use client";
import React from "react";
import Card from "@/components/Card";
import "./style.css";

const Activities = ({ activities }: { activities: any }) => {
  return (
    <div className="activities-container"
    style={{
      height: "100%",
    }}
    >
      <h2 className="section-title">Activities</h2>
      <ul className="activity-list" style={{
        
      }}>
        {activities.map((activity:any) => (
          <li key={activity.id}>
            <Card
              activity={activity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
