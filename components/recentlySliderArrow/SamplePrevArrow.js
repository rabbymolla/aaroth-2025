import { FaAngleLeft } from "react-icons/fa6";
export default function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -top-[35px] lg:-top-14 right-16  -translate-y-1/2 rounded-full z-10 p-2 cursor-pointer text-gray_color hover:text-button_color duration-100 ease-linear "
      onClick={onClick}
    >
      <FaAngleLeft size={20} />
    </div>
  );
}
