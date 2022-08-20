import Card from "@/ui/card";
export default function Board({ items, handleClick }) {
  return (
    <div className="h-[40rem] w-[40rem] grid grid-cols-4 grid-rows-4">
      {items.map((item, index) => {
        return (
          <Card key={index} id={index} item={item} handleClick={handleClick} />
        );
      })}
    </div>
  );
}
