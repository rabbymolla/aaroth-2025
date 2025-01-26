export default function Hadding({ title, className }) {
  return (
    <h1
      className={`font-Roboto font-bold text-black_color mb-5 lg:mb-10 text-lg ${
        className ? `${className}` : "md:text-2xl"
      }`}
    >
      {title}
    </h1>
  );
}
