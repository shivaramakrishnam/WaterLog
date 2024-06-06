import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WaterContainer from "./components/WaterContainer.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [maxLevel,setMaxLever] = useState(10)

  return (
    <>
      <h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Record a drink
        </button>
      </div>
      </h1>
      <h2>Recorded drinks are {count}</h2>
      <WaterContainer currentLevel={count} maxLevel={maxLevel}/>
    </>
  )
}

export default App
