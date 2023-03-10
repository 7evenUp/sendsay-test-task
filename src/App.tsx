import {
  Canvas,
  Container,
  Display,
  Equal,
  Numpad,
  Operators,
  ToggleMode,
} from "./components";
import { useAppSelector } from "./redux/hooks";
import { selectCalculator } from "./redux/selectors";

function App() {
  const calculator = useAppSelector(selectCalculator);
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">
      <div className="w-[695px] h-[640px] flex items-center px-20 gap-[52px]">
        <div className="w-[240px] flex flex-col gap-3">
          <Container name="display" disabled={calculator.includes("display")}>
            <Display />
          </Container>
          <Container
            name="operators"
            disabled={calculator.includes("operators")}
          >
            <Operators />
          </Container>
          <Container name="numpad" disabled={calculator.includes("numpad")}>
            <Numpad />
          </Container>
          <Container name="equal" disabled={calculator.includes("equal")}>
            <Equal />
          </Container>
        </div>
        <div className="w-[243px] relative">
          <div className="absolute w-full -top-[30px] left-0 -translate-y-full">
            <ToggleMode />
          </div>
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default App;
