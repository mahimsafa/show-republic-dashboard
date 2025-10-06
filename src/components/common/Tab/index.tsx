
import { ReactNode } from "react";
import "./style.css";
import Button from "../../Button";
interface TabProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  border: string;
  className?: string;
}

const CustomTab: React.FC<TabProps> = ({
  children,
  isActive,
  onClick,
  border,
  className,
}) => {
  return (
    <Button
      className={`tab ${isActive ? "active" : ""} ${className}`}
      onClick={onClick}
      style={{ border: border }}
    >
      {children}
    </Button>
  );
};

export default CustomTab;
