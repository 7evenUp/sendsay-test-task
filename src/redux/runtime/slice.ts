import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const MAX_DISPLAY_SYMBOLS = 15

export type RuntimeType = {
  display: string
  expression: string
  opClicked: boolean // check if any of operators are clicked: [+ - * / =]
}

const initialState: RuntimeType = {
  display: '0',
  expression: '',
  opClicked: false,
}

export const runtimeSlice = createSlice({
  name: 'runtime',
  initialState,
  reducers: {
    addToDisplay: (state, action: PayloadAction<string>) => {
      const isEmpty = state.display === '0'

      if (state.display.length >= MAX_DISPLAY_SYMBOLS) return

      if (action.payload === ',') {
        if (isEmpty) state.display = '0.'
        else if (state.display.includes('.')) return
        else state.display += '.'
      } else {
        if (isEmpty || state.opClicked) state.display = action.payload
        else state.display += action.payload
      }
      state.opClicked = false
    },
    addExpression: (state, action: PayloadAction<string>) => {
      const op = action.payload === 'x' ? '*' : action.payload
      state.expression = state.display + op
      state.opClicked = true
    },
    calculate: (state) => {
      if (state.display === '0' && state.expression === '') return
      if (state.expression.at(-1) === '/' && state.display === '0') {
        state.display = 'Не определено'
        state.expression = '0'
      } else {
        state.display = '' + eval(state.expression + state.display)
      }
      state.opClicked = true
    },
    reset: (state) => {
      state.display = '0'
      state.expression = '0'
    }
  },
})

export const { addToDisplay, reset, addExpression, calculate} = runtimeSlice.actions

export default runtimeSlice.reducer