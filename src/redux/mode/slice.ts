import { createSlice } from '@reduxjs/toolkit'

export type ModeType = {
  isConstructor: boolean
}

const initialState: ModeType = {
  isConstructor: true
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.isConstructor = !state.isConstructor
    }
  },
})

export const { switchMode } = modeSlice.actions

export default modeSlice.reducer