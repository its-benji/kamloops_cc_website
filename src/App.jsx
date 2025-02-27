import { useState } from 'react'
import LatestSermon from './components/LatestSermon'
import WeeklyTeaching from './components/WeeklyTeaching'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: "#F4E9CD", minHeight: "100vh" }}>
      <LatestSermon />
      <WeeklyTeaching />
      <LatestSermon />
    </div>
  )
}

export default App
