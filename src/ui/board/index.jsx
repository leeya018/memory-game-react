import Card from "@/ui/card";
export default function Board({ items, handleClick }) {
  return (
    <div className="2xl:h-[40rem] 2xl:w-[40rem] grid grid-cols-4 grid-rows-4 sm:w-[300px] sm:h-[300px]">
      {items.map((item, index) => {
        return (
          <Card key={index} id={index} item={item} handleClick={handleClick} />
        );
      })}
    </div>
  );
}
