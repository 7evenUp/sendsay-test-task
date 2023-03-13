import { useCallback } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCalculator } from "../redux/calculator/selectors";
import { remove, update } from "../redux/calculator/slice";
import { addExpression, addToDisplay } from "../redux/runtime/slice";
import { Display, Equal, Numpad, Operators } from "./Calculator";
import DragCard from "./DragCard";
import { Drop } from "../icons";
import { calcNames } from "../types";

const Canvas = () => {
  const calculator = useAppSelector(selectCalculator);
  const dispatch = useAppDispatch();

  const findCard = useCallback(
    (name: calcNames) => {
      const card = calculator.filter((c) => `${c.name}` === name)[0] as {
        id: number;
        name: calcNames;
      };
      return {
        card,
        index: calculator.findIndex((el) => el.name === name),
      };
    },
    [calculator]
  );

  const moveCard = useCallback(
    (name: calcNames, atIndex: number) => {
      const { card, index } = findCard(name);
      dispatch(update({ index, atIndex, item: card }));
    },
    [findCard, calculator]
  );

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ["container"],
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  if (!calculator.length) {
    return (
      <div
        ref={drop}
        className={`h-[448px] rounded-md flex border-border-dashed border-dashed transition-all items-center border-2 ${
          canDrop ? "bg-sky-50" : ""
        }`}
      >
        <EmptryCanvas />
      </div>
    );
  }

  return (
    <div
      ref={drop}
      className="h-[448px] rounded-md flex border-border-dashed border-dashed transition-all items-start border-0"
    >
      <div className="flex flex-col w-full gap-3">
        {calculator.map((item) => (
          <DragCard
            name={item.name}
            key={item.id}
            moveCard={moveCard}
            findCard={findCard}
            onDoubleClick={() => dispatch(remove(item.id))}
          >
            {item.name === "display" ? (
              <Display />
            ) : item.name === "operators" ? (
              <Operators
                onClick={(evt) => {
                  dispatch(addExpression(evt.currentTarget.innerText));
                }}
              />
            ) : item.name === "numpad" ? (
              <Numpad
                onClick={(evt) => {
                  dispatch(addToDisplay(evt.currentTarget.innerText));
                }}
              />
            ) : (
              <Equal />
            )}
          </DragCard>
        ))}
      </div>
    </div>
  );
};

const EmptryCanvas = () => (
  <div className="flex flex-col items-center w-full">
    <Drop width={20} height={20} color="stroke-black" />
    <span className="text-sm font-medium text-iris mt-3">Перетащите сюда</span>
    <span className="text-xs text-gray-text w-[106px] mt-1 text-center">
      любой элемент из левой панели
    </span>
  </div>
);

export default Canvas;
