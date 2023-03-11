import { useDrop } from "react-dnd";
import { Drop } from "../icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCalculator } from "../redux/selectors";
import { remove } from "../redux/slice";
import Display from "./Display";
import Equal from "./Equal";
import Numpad from "./Numpad";
import Operators from "./Operators";
import DragCard from './DragCard'

const Canvas = () => {
  const calculator = useAppSelector(selectCalculator);
  const dispatch = useAppDispatch();

  const [{ canDrop, isOver, itemType }, drop] = useDrop(() => ({
    accept: ["BOX", "BOX_X"],
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      itemType: monitor.getItemType(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`h-[448px] rounded-md flex border-border-dashed border-dashed transition-all
                ${!!calculator.length ? "items-start" : "items-center"}
                ${!!calculator.length ? "border-0" : "border-2"}
                ${canDrop && !calculator.length ? "bg-sky-50" : ""}`}
    >
      {!!calculator.length ? (
        <div className="flex flex-col w-full gap-3">
          {calculator.map((item) => (
            <DragCard key={item.id} onDoubleClick={() => dispatch(remove(item.id))}>
              {item.name === "display" ? (
                <Display />
              ) : item.name === "operators" ? (
                <Operators />
              ) : item.name === "numpad" ? (
                <Numpad />
              ) : (
                <Equal />
              )}
            </DragCard>
          ))}
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
