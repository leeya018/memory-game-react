import { useEffect, useState } from "react";
import gamePreviewIcon from "@/img/game-preview.png";
import Board from "@/ui/board";
import angularIcon from "@/img/angular.png";
import cssIcon from "@/img/css.png";
import htmlIcon from "@/img/html.png";
import jsIcon from "@/img/js.png";
import nodeJsIcon from "@/img/nodejs.png";
import reactIcon from "@/img/react.png";
import scssIcon from "@/img/scss.png";
import vueIcon from "@/img/vue.png";

const initialItems = [
  { id: 1, src: angularIcon.src, stat: "" },
  { id: 1, src: angularIcon.src, stat: "" },
  { id: 2, src: cssIcon.src, stat: "" },
  { id: 2, src: cssIcon.src, stat: "" },
  { id: 3, src: vueIcon.src, stat: "" },
  { id: 3, src: vueIcon.src, stat: "" },
  { id: 4, src: htmlIcon.src, stat: "" },
  { id: 4, src: htmlIcon.src, stat: "" },
  { id: 5, src: jsIcon.src, stat: "" },
  { id: 5, src: jsIcon.src, stat: "" },
  { id: 6, src: nodeJsIcon.src, stat: "" },
  { id: 6, src: nodeJsIcon.src, stat: "" },
  { id: 7, src: reactIcon.src, stat: "" },
  { id: 7, src: reactIcon.src, stat: "" },
  { id: 8, src: scssIcon.src, stat: "" },
  { id: 8, src: scssIcon.src, stat: "" },
];
export default function Game({}) {
  const [items, setItems] = useState(initialItems);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    setItems([...items].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    console.log(items.map((item) => item.stat));
  }, [items]);

  const check = (currentId) => {
    let newItems;
    if (items[currentId].src === items[prev].src) {
      newItems = [...items];
      newItems[currentId].stat = "correct";
      newItems[prev].stat = "correct";
      setItems(newItems);
      setPrev(-1);
    } else {
      newItems = [...items];
      newItems[currentId].stat = "wrong";
      newItems[prev].stat = "wrong";
      setItems(newItems);
      setTimeout(() => {
        newItems[prev].stat = "";
        newItems[currentId].stat = "";
        setItems(newItems);
        setPrev(-1);
      }, 1000);
    }
  };

  const hasWrongs = () => {
    return items.filter((item) => item.stat === "wrong").length === 2;
  };

  const handleClick = (id) => {
    if (items[id].stat !== "") return;
    if (hasWrongs()) return;
    let newItems;
    if (prev === -1) {
      setPrev(id);
      newItems = [...items];
      newItems[id].stat = "active";
      setItems(newItems);
    } else {
      check(id);
    }
  };

  const restart = () => {
    setItems(initialItems);
  };

  const boardIsFull = () => {
    return items.every((item) => item.stat !== "");
  };
  return (
    <div className="flex flex-col items-center">
      <h1>this is a memeory game</h1>
      {boardIsFull() && (
        <button className="border-2 border-black" onClick={restart}>
          restart
        </button>
      )}
      <Board items={items} handleClick={handleClick} />
    </div>
  );
}
