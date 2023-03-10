import { useState } from "react";
import { useDrop } from "react-dnd";
import { Drop } from "../icons";
import Button from "./Button";
import Display from "./Display";
import Numpad from "./Numpad";
import Operators from "./Operators";

const Canvas = () => {
  const [items, setItems] = useState([
    "display",
    "numpad",
    "operators",
    "equal",
  ]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div
      ref={drop}
      role={"Dustbin"}
      className={`h-[448px] rounded-md flex border-border-dashed border-dashed transition-all
                ${!!items.length ? 'items-start' : 'items-center'}
                ${!!items.length ? 'border-0' : 'border-2'}
                ${canDrop && !items.length ? "bg-sky-50" : ""}`}
    >
      {!!items.length ? (
        <div className="flex flex-col w-full gap-3">
          {items.map((item) =>
            item === "display" ? (
              <Display />
            ) : item === "operators" ? (
              <Operators />
            ) : item === "numpad" ? (
              <Numpad />
            ) : (
              <Button isEqualsButton={true}>=</Button>
            )
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <Drop width={20} height={20} color="stroke-black" />
          <span className="text-sm font-medium text-iris mt-3">
            Перетащите сюда
          </span>
          <span className="text-xs text-gray-text w-[106px] mt-1 text-center">
            любой элемент из левой панели
          </span>
        </div>
      )}
    </div>
  );
};

export default Canvas;
