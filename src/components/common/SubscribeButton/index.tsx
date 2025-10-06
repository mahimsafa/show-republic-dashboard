"use client";
import { IoDuplicateOutline, IoNotificationsOutline, IoPersonAddOutline, IoPersonOutline } from "react-icons/io5";
import { Button, Icon } from "@repo/common";
import "./style.css";
import { useState } from "react";
interface Props{
  isSubscribed? : boolean;
  
}
const SubscribeButton: React.FC<Props> = ({isSubscribed}) => {
  const [state, setState] = useState(isSubscribed);
  return (
    <Button
      type="button"
      className={`btn-subscribe ${state ? "active" : ""} d-flex align-items-center gap-2`}
      onClick={() => setState(!state)}
    >
      <Icon
        type={state ? IoNotificationsOutline : IoPersonOutline}
        size={22}
      />
      <span>{state ? "Subscribed" : "Subscribe"}</span>
    </Button>
  );
};

export default SubscribeButton;
