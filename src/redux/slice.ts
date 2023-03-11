import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { calcNames } from '../types'

export type dragType = {
  id: number,
  name: calcNames
}

const initialState: dragType[] = [
  {id: 1, name: 'display'},
  {id: 3, name: 'numpad'}
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
    }
  },
})

export const { add, remove } = calculatorSlice.actions

export default calculatorSlice.reducer