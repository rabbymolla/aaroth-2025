import { FaAngleLeft } from "react-icons/fa6";

export default function PrevArrow({ clickRef, className }) {
  return (
    <div className={className} onClick={() => clickRef.current.slickPrev()}>
      <FaAngleLeft size={20} />
    </div>
  );
}
