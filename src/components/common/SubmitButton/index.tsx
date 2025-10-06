import { ReactNode } from "react";
import "./style.css";
interface Props {
  children: ReactNode;
}
const SubmitButton: React.FC<Props> = ({ children }) => {
  return (
    <button type="submit" className="btn-submit">
      {children}
    </button>
  );
};

export default SubmitButton;
