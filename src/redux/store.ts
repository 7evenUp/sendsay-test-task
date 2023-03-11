import { combineReducers, configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculator/slice'
import modeReducer from './mode/slice'

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  mode: modeReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']