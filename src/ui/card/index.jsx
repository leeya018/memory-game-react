export default function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? " scale-1" : "scale-0";
  const wrong = item.stat.includes("wrong") ? "bg-red-600" : "";
  const correct = item.stat.includes("correct") ? "bg-green-600" : "";
  return (
    <div
      className={`border-2 border-black flex justify-center items-center  ${wrong} ${correct}`}
      onClick={() => handleClick(id)}
    >
      <img className={` h-full  ${itemClass}`} src={item.src} alt="" />
    </div>
  );
}
