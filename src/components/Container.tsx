import React from 'react'
import { useDrag } from 'react-dnd'

interface DropResult {
  name: string
}

const Container = ({children, name}: {children: React.ReactNode, name: string}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    item: { name },
    end: (draggedItem, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (draggedItem && dropResult) {
        console.log(`You dropped ${draggedItem.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  return (
    <div ref={dragPreview} className={`rounded-[4px] p-1 shadow-md bg-white ${isDragging ? 'bg-green-200' : ''}`}>
      <div role="Handle" ref={drag}>
      {children}
      </div>
    </div>
  )
}

export default Container