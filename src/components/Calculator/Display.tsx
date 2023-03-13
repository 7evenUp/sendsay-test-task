import { useAppSelector } from "../../redux/hooks";
import { selectIsModeConstructor } from "../../redux/mode/selectors";
import { selectDisplay } from "../../redux/runtime/selectors";

const Display = () => {
  const display = useAppSelector(selectDisplay);
  console.log(display.length)
  const isConstructorMode = useAppSelector(selectIsModeConstructor);
  return (
    <div
      className={`w-full bg-gray-bg rounded-md py-1 px-2 font-extrabold text-display text-right ${
        display.length > 11 ? "text-2xl" : display.length > 9 ? "text-3xl" : "text-4xl"
      }`}
    >
      {isConstructorMode ? "0" : display}
    </div>
  );
};

export default Display;
