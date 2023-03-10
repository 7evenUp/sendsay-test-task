import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: string[] = []

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push(action.payload)
    },
    remove: (state, action: PayloadAction<string>) => {
      state.splice(state.indexOf(action.payload), 1)
    }
  },
})

export const { add, remove } = calculatorSlice.actions

export default calculatorSlice.reducer