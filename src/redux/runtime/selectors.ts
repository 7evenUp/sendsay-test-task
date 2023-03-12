import { RootState } from "../store";
import { createSelector } from 'reselect'
import { calcNames } from "../../types";

export const selectDisplay = (state: RootState) => state.runtime.display

// export const selectIsItemInCalculator = createSelector(
//   [selectCalculator, (_, name: calcNames) => name],
//   (calculator, name) => {
//     return calculator.find((el => el.name === name))
//   }
// )