import { useEffect, useRef } from "react";
import { memo } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { useAppSelector } from "../redux/hooks";
import { selectIsModeConstructor } from "../redux/mode/selectors";
import { calcNames } from "../types";

interface Item {
  name: calcNames;
  originalIndex: number;
}

const DragCard = ({
  name,
  children,
  onDoubleClick,
  moveCard,
  findCard,
}: {
  name: calcNames;
  children: React.ReactNode;
  onDoubleClick: () => void;
  moveCard: (name: calcNames, to: number) => void;
  findCard: (name: calcNames) => { index: number };
}) => {
  const isConstructorMode = useAppSelector(selectIsModeConstructor);
  const ref = useRef<HTMLDivElement>(null);

  const { index: originalIndex } = findCard(name);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "drag_card",
      item: { name, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { name: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [name, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "drag_card",
      hover: (item: Item, monitor) => {
        if (!ref.current) {
          return;
        }
        const { index: overIndex } = findCard(name);

        // Don't replace items with themselves
        if (item.originalIndex === overIndex) {
          return;
        }

        const { bottom, top } = ref.current.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY = (bottom - top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset() as XYCoord;
        // Get pixels to the top
        const hoverClientY = clientOffset.y - top;

        // Dragging downwards
        if (item.originalIndex < overIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards
        if (item.originalIndex > overIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveCard(item.name, overIndex);
        item.originalIndex = overIndex;
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;

  useEffect(() => {
    drag(drop(ref));
  }, [isConstructorMode]);

  return (
    <div
      className={isConstructorMode && name !== "display" ? "cursor-move" : ""}
      ref={isConstructorMode && name !== "display" ? ref : null}
      style={{ opacity }}
      onDoubleClick={isConstructorMode ? onDoubleClick : () => {}}
    >
      {children}
    </div>
  );
};

export default memo(DragCard);
