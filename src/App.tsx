import { Button, Container, Display, Numpad, ToggleMode } from './components'
import { Drop } from './icons'

function App() {

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">
      <div className='w-[695px] h-[640px] flex items-center px-20 gap-[52px]'>
        <div className="w-[240px] flex flex-col gap-3">
          <Container>
            <Display />
          </Container>
          <Container>
            <div className='flex gap-2'>
            <Button>/</Button>
            <Button>х</Button>
            <Button>-</Button>
            <Button>+</Button>
            </div>
          </Container>
          <Container>
            <Numpad />
          </Container>
          <Container>
            <Button isEqualsButton={true}>=</Button>
          </Container>
        </div>
        <div className="w-[243px] relative">
          <div className="absolute w-full -top-[30px] left-0 -translate-y-full">
            <ToggleMode />
          </div>
          <div className="flex items-center justify-center h-[448px] rounded-md
                          border-2 border-border-dashed border-dashed">
            <div className="flex flex-col items-center">
              <Drop width={20} height={20} color='stroke-black' />
              <span className="text-sm font-medium text-iris mt-3">Перетащите сюда</span>
              <span className="text-xs text-gray-text w-[106px] mt-1 text-center">любой элемент из левой панели</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
