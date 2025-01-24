import { FaAngleRight } from "react-icons/fa6";

export default function NextArrow({ clickRef, className }) {
  // Ensure that only relevant props are passed to the div
  return (
    <div className={className} onClick={() => clickRef.current.slickNext()}>
      <FaAngleRight />
    </div>
  );
}
