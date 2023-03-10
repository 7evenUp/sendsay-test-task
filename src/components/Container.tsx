import React from "react";
import { useDrag } from "react-dnd";
import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/slice";
import { calcNames } from "../types";

interface DropResult {
  name: string;
}

const Container = ({
  children,
  name,
  disabled,
}: {
  children: React.ReactNode;
  name: calcNames;
  disabled: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { name },
    end: (draggedItem, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (draggedItem && dropResult) {
        dispatch(add(draggedItem.name));
        console.log(`You dropped ${draggedItem.name} into ${dropResult.name}!`);
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
      <div role="Handle" ref={disabled ? null : drag}>
        {children}
      </div>
    </div>
  );
};

export default Container;
