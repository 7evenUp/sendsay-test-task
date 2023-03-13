import { FC, useRef } from "react";
import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useAppSelector } from "../redux/hooks";
import { selectIsModeConstructor } from "../redux/mode/selectors";
import { calcNames } from "../types";

export interface CardProps {
  name: calcNames;
  children: React.ReactNode;
  onDoubleClick: () => void;
  moveCard: (name: calcNames, to: number) => void;
  findCard: (name: calcNames) => { index: number };
}

interface Item {
  name: calcNames;
  originalIndex: number;
}

export const DragCard: FC<CardProps> = memo(function Card({
  name,
  children,
  onDoubleClick,
  moveCard,
  findCard,
}) {
  const isConstructorMode = useAppSelector(selectIsModeConstructor);
  const ref = useRef(null);

  const originalIndex = findCard(name).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "BOX_X",
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
      accept: "BOX_X",
      hover: (item: Item, monitor) => {
        if (!ref.current) {
          return;
        }
        const { index: overIndex } = findCard(name);
        
        // Don't replace items with themselves
        if (item.originalIndex === overIndex) {
          return;
        }

        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        console.log('===========================================')
        console.log('HoverBoundingReact: ', hoverBoundingRect)
        console.log('hoverMiddleY: ', hoverMiddleY)
        console.log('clientOffset: ', clientOffset)
        console.log('hoverClientY: ', hoverClientY)

        // Dragging downwards
        if (item.originalIndex < overIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards
        if (item.originalIndex > overIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveCard(item.name, overIndex);
        item.originalIndex = overIndex
      },
    }),
    [findCard, moveCard]
  );

  

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));
  return (
    <div
      className={isConstructorMode && name !== 'display' ? 'cursor-move' : ''}
      ref={isConstructorMode && name !== 'display' ? ref : null}
      style={{ opacity }}
      onDoubleClick={isConstructorMode ? onDoubleClick : () => {}}
    >
      {children}
    </div>
  );
});

export default DragCard;
