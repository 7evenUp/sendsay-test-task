import type { FC } from 'react'
import { memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { calcNames } from '../types'

export interface CardProps {
  name: calcNames
  children: React.ReactNode
  onDoubleClick: () => void,
  moveCard: (name: calcNames, to: number) => void
  findCard: (name: calcNames) => { index: number }
}

interface Item {
  name: calcNames
  originalIndex: number
}

export const DragCard: FC<CardProps> = memo(function Card({
  name,
  children,
  onDoubleClick,
  moveCard,
  findCard,
}) {
  const originalIndex = findCard(name).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'BOX_X',
      item: { name, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { name: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      },
    }),
    [name, originalIndex, moveCard],
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'BOX_X',
      hover: (item: Item, monitor) => {
        console.log('=============================')
        // console.log(monitor.)
        console.log('=============================')
        const { index: overIndex } = findCard(name)
        moveCard(item.name, overIndex)
      },
    }),
    [findCard, moveCard],
  )

  const opacity = isDragging ? 0 : 1
  return (
    <div className='cursor-move'
    ref={(node) => drag(drop(node))} style={{ opacity }} onDoubleClick={onDoubleClick}>
      {children}
    </div>
  )
})

export default DragCard
