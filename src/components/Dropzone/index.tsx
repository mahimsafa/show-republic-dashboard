import { useDropzone } from "react-dropzone";
import "./style.css";

import { IoAddSharp, IoCameraOutline } from "react-icons/io5";
const DropZone: React.FC = () => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      className="d-flex flex-column align-items-center justify-content-center dropzone"
    >
      <input {...getInputProps()} />
      <div className="d-flex flex-column gap-3 align-items-center">
        <span>
          <IoCameraOutline color="#667085" size={24} />
        </span>
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <span>
            <IoAddSharp color="#83B3FF" size={24} />
          </span>
          <p className="label">Add image</p>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
