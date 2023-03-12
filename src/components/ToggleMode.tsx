import { Eye, Selector } from "../icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectIsModeConstructor } from "../redux/mode/selectors";
import { switchMode } from "../redux/mode/slice";
import { reset } from "../redux/runtime/slice";

const ToggleMode = () => {
  const dispatch = useAppDispatch();
  const isConstructorMode = useAppSelector(selectIsModeConstructor);

  const onClick = () => {
    dispatch(switchMode());
    dispatch(reset());
  };

  return (
    <div className="flex items-center justify-between bg-gray-bg rounded-md p-[1px] w-full">
      <button
        onClick={onClick}
        className={`flex items-center gap-2 py-2 px-3 ${
          !isConstructorMode ? "bg-white rounded-[5px] ring-1 ring-outline" : ""
        }`}
      >
        <Eye
          width={20}
          height={20}
          color={!isConstructorMode ? "stroke-iris" : "stroke-gray-text"}
        />
        <span className="font-medium text-sm text-gray-text">Runtime</span>
      </button>

      <button
        onClick={onClick}
        className={`flex items-center gap-2 py-2 px-3 ${
          isConstructorMode ? "bg-white rounded-[5px] ring-1 ring-outline" : ""
        }`}
      >
        <Selector
          width={20}
          height={20}
          color={isConstructorMode ? "stroke-iris" : "stroke-gray-text"}
        />
        <span className="font-medium text-sm text-gray-text">Constructor</span>
      </button>
    </div>
  );
};

export default ToggleMode;
