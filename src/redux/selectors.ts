import { RootState } from "./store";
import { createSelector } from 'reselect'
import { calcNames } from "../types";

export const selectCalculator = (state: RootState) => state.calculator

export const selectIsItemInCalculator = createSelector(
  [selectCalculator, (_, name: calcNames) => name],
  (calculator, name) => {
    return calculator.find((el => el.name === name))
  }
)