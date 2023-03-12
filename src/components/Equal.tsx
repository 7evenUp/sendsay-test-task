import { useAppDispatch } from "../redux/hooks";
import { calculate } from "../redux/runtime/slice";
import Button from "./Button";

const Equal = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button onClick={() => dispatch(calculate())} isEqualsButton={true}>=</Button>
    </div>
  );
};

export default Equal;
