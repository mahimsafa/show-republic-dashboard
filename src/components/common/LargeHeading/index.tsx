import React from "react";
import "./style.css";
interface Props {
  children: React.ReactNode;
}
const LargeHeading: React.FC<Props> = ({ children }) => {
  return <h4 className="lg-heading">{children}</h4>;
};

export default LargeHeading;
