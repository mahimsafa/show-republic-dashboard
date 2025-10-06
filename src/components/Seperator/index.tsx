import React from "react";
interface Props {
  color?: string;
}
const Seperator: React.FC<Props> = ({ color = "var(--border-color)" }) => {
  return (
    <span className="fw-bold" style={{ color: color }}>
      &#124;
    </span>
  );
};

export default Seperator;
