import { selectIsItemInCalculator } from "../redux/calculator/selectors";
import { useAppSelector } from "../redux/hooks";
import { selectIsModeConstructor } from "../redux/mode/selectors";
import { selectDisplay } from "../redux/runtime/selectors";
import { RootState } from "../redux/store";

const Display = () => {
  const display = useAppSelector(selectDisplay)
  const isConstructorMode = useAppSelector(selectIsModeConstructor)
  return (
    <div
      className="w-full bg-gray-bg rounded-md py-1 px-2
                font-extrabold text-display text-4xl text-right"
    >
      {isConstructorMode ? '0' : display}
    </div>
  );
};

export default Display;
