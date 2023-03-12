import React from "react";
import { useDrag } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectIsItemInCalculator } from "../redux/calculator/selectors";
import { add } from "../redux/calculator/slice";
import { RootState } from "../redux/store";
import { calcNames } from "../types";

interface DropResult {
  name: string;
}

const Container = ({
  children,
  id,
  name,
}: {
  children: React.ReactNode;
  id: number,
  name: calcNames;
}) => {
  const disabled = useAppSelector((state: RootState) => selectIsItemInCalculator(state, name))
  const dispatch = useAppDispatch();
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { id, name },
    end: (draggedItem, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (draggedItem && dropResult) {
        dispatch(add({id: draggedItem.id, name: draggedItem.name}));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={dragPreview}
      className={`rounded-[4px] p-1 bg-white
                ${isDragging ? "opacity-80" : ""}
                ${
                  disabled
                    ? "cursor-no-drop shadow-none opacity-50"
                    : "shadow-md"
                }`}
    >
      <div ref={disabled ? null : drag}>
        {children}
      </div>
    </div>
  );
};

export default Container;
