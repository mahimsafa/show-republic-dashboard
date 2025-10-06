import Image from "next/image";
import "./style.css";
const Logo:React.FC = () => {
  return (
    <div className="logo d-flex align-items-center">
      <Image src="/icon.png" alt="logo" width={70} height={60} />
      <h5 className="text-lg">ShowRepublic</h5>
    </div>
  );
};

export default Logo;
