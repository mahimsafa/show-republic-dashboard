import "./style.css";
interface VideoProps {
  src: string;
  rounded?: true | boolean;
}

const Video: React.FC<VideoProps> = ({ src, rounded }) => {
  return (
    <video
      src={src}
      width="100%"
      controls
      className={`show-video ${rounded ? "rounded-3" : ""}`}
    ></video>
  );
};

export default Video;
