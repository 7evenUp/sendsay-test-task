import React from 'react'
import { Eye, Selector } from '../icons'

const ToggleMode = () => {
  return (
    <div className="flex items-center justify-between bg-gray-bg rounded-md p-[1px] w-[243px]">
      <div className="flex items-center gap-2 py-2 px-3">
        <Eye width={20} height={20} color='stroke-iris' />
        <span className="font-medium text-sm">Runtime</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-3 bg-white rounded-[5px] ring-1 ring-outline">
        <Selector width={20} height={20} color='stroke-iris' />
        <span className="font-medium text-sm">Constructor</span>
      </div>
    </div>
  )
}

export default ToggleMode