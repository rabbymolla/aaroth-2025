import { FaAngleRight } from "react-icons/fa6";
export default function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 md:right-2 -translate-y-1/2 bg-gray_color rounded-full p-2 cursor-pointer z-10 text-white_color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={onClick}
    >
      <FaAngleRight size={20} />
    </div>
  );
}
