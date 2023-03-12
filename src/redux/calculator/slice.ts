import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { calcNames } from '../../types'

export type dragType = {
  id: number,
  name: calcNames
}

const initialState: dragType[] = [
  {id: 1, name: 'display'},
  {id: 3, name: 'numpad'},
  {id: 2, name: 'operators'},
  {id: 4, name: 'equal'}
]

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<dragType>) => {
      state.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      let indexOfObj = state.findIndex((el) => el.id === action.payload)
      state.splice(indexOfObj, 1)
    },
    update: (state, action: PayloadAction<{index: number, atIndex: number, item: dragType}>) => {
      state.splice(action.payload.atIndex,0,...state.splice(action.payload.index,1))
    }
  },
})

export const { add, remove, update } = calculatorSlice.actions

export default calculatorSlice.reducer