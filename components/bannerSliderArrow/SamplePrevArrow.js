import { FaAngleLeft } from "react-icons/fa6";
export default function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 md:left-2 -translate-y-1/2 bg-gray_color rounded-full z-10 p-2 cursor-pointer text-white_color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={onClick}
    >
      <FaAngleLeft size={20} />
    </div>
  );
}
