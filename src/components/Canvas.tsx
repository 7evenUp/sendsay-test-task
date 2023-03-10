import { useState } from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { Drop } from "../icons";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import Button from "./Button";
import Display from "./Display";
import Numpad from "./Numpad";
import Operators from "./Operators";

const Canvas = () => {
  const calculator = useAppSelector((state: RootState) => state.calculator)
  
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
                ${!!calculator.length ? 'items-start' : 'items-center'}
                ${!!calculator.length ? 'border-0' : 'border-2'}
                ${canDrop && !calculator.length ? "bg-sky-50" : ""}`}
    >
      {!!calculator.length ? (
        <div className="flex flex-col w-full gap-3">
          {calculator.map((item) =>
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
