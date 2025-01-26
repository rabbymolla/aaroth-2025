export default function Hadding({ title, className }) {
  return (
    <h1
      className={`font-Roboto font-bold mb-5 text-black_color text-lg ${
        className ? `${className}` : " md:text-2xl lg:mb-10"
      }`}
    >
      {title}
    </h1>
  );
}
