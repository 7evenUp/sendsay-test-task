import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RuntimeType = {
  display: string
  result: string
  expression: string
}

const initialState: RuntimeType = {
  display: '0',
  result: '',
  expression: ''
}

export const runtimeSlice = createSlice({
  name: 'runtime',
  initialState,
  reducers: {
    addToDisplay: (state, action: PayloadAction<string>) => {
      const isComma = action.payload === ','
      const isEmpty = state.display === '0'

      if (isComma) {
        if (isEmpty) state.display = '0.'
        else if (state.display.includes('.')) return
        else state.display += '.'
      } else {
        if (isEmpty) state.display = action.payload
        else state.display += action.payload
      }
    },
    addExpression: (state, action: PayloadAction<string>) => {
      const op = action.payload === 'x' ? '*' : action.payload
      state.expression = state.display + op
      state.display = '0'
      console.log(state.expression)
    },
    calculate: (state) => {
      state.display = eval(state.expression + state.display)
      console.log(state.display, state.expression)
    },
    reset: (state) => {
      state.display = '0'
    }
  },
})

export const { addToDisplay, reset, addExpression, calculate} = runtimeSlice.actions

export default runtimeSlice.reducer