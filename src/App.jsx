import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MBread from './assets/Mysterious Bread.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img className="icon" src="https://raw.githubusercontent.com/AlkolBodo/Boolean-Case-MonsterClicker/main/src/assets/Mysterious%20Bread.png" alt="Mystery Bread"  width="256" height="256" onClick={() => setCount((count) => count + 1)}/>
      </div>
      <h1>CLICK HIM</h1>
      <div className="card">
        <button>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
