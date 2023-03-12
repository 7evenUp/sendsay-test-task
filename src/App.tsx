import { Canvas, Constructor, ToggleMode } from "./components";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">
      <div className="w-[695px] h-[640px] flex items-center justify-end px-20 gap-[52px]">
        <Constructor />
        
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
