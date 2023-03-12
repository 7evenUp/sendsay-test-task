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
import { selectIsModeConstructor } from "./redux/mode/selectors";

function App() {
  const isConstructorMode = useAppSelector(selectIsModeConstructor)
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">
      <div className="w-[695px] h-[640px] flex items-center justify-end px-20 gap-[52px]">
        <div className={`${isConstructorMode ? 'flex' : 'hidden'} flex-col gap-3 w-[240px]`}>
          <Container id={1} name="display">
            <Display />
          </Container>
          <Container
            id={2}
            name="operators"
          >
            <Operators />
          </Container>
          <Container id={3} name="numpad">
            <Numpad />
          </Container>
          <Container id={4} name="equal">
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
