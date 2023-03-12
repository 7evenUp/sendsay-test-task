import React from "react";
import { useDrag } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectIsItemInCalculator } from "../redux/calculator/selectors";
import { add } from "../redux/calculator/slice";
import { RootState } from "../redux/store";
import { calcNames } from "../types";

const Container = ({
  children,
  id,
  name,
}: {
  children: React.ReactNode;
  id: number;
  name: calcNames;
}) => {
  const dispatch = useAppDispatch();
  const isDisabled = useAppSelector((state: RootState) =>
    selectIsItemInCalculator(state, name)
  );

  const [_, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { id, name },
    end: (draggedItem, monitor) => {
      if (draggedItem && monitor.getDropResult()) {
        // Adding item to redux when drag ends
        dispatch(add({ id: draggedItem.id, name: draggedItem.name }));
      }
    },
  }));

  return (
    <div
      ref={dragPreview}
      className={`rounded-[4px] p-1 bg-white ${
        isDisabled ? "cursor-no-drop shadow-none opacity-50" : "shadow-md"
      }`}
    >
      <div ref={isDisabled ? null : drag}>{children}</div>
    </div>
  );
};

export default Container;
