import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './lottery'

function App() {

  return (
    <>
     <Lottery n={3} winningSum={15}/>
    </>
  )
}

export default App
