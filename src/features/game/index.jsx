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
  { id: 2, src: cssIcon.src, stat: "correct" },
  { id: 2, src: cssIcon.src, stat: "" },
  { id: 3, src: vueIcon.src, stat: "wrong" },
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

  const handleClick = (id) => {
    items[id].stat = "active";
    setPrev(id);
  };
  return (
    <div className="flex flex-col items-center">
      <h1>this is a memeory game</h1>
      <Board items={items} handleClick={handleClick} />
    </div>
  );
}
