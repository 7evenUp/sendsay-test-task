import { Button, Canvas, Container, Display, Numpad, Operators, ToggleMode } from './components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
    
    <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">
      <div className='w-[695px] h-[640px] flex items-center px-20 gap-[52px]'>
        <div className="w-[240px] flex flex-col gap-3">
          <Container name='display'>
            <Display />
          </Container>
          <Container name='operators'>
            <Operators />
          </Container>
          <Container name='numpad'>
            <Numpad />
          </Container>
          <Container name='equal'>
            <Button isEqualsButton={true}>=</Button>
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
    </DndProvider>
  )
}

export default App
