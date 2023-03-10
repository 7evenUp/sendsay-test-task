import { ToggleMode } from './components'
import { Drop, Eye, Selector } from './icons'

function App() {

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-x-hidden">
      <div className='w-[695px] h-[640px] flex px-20 gap-[52px]'>
        <div className="w-[240px] bg-red-300">

        </div>
        <div className="w-[243px] bg-emerald-300 relative">
          <div className="absolute w-full -top-[30px] left-0 -translate-y-full">
            <ToggleMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
