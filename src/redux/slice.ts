import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { calcNames } from '../types'

const initialState: calcNames[] = []

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<calcNames>) => {
      state.push(action.payload)
    },
    remove: (state, action: PayloadAction<calcNames>) => {
      state.splice(state.indexOf(action.payload), 1)
    }
  },
})

export const { add, remove } = calculatorSlice.actions

export default calculatorSlice.reducer