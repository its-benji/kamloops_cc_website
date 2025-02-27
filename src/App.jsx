import { useState } from 'react'
import LatestSermon from './components/LatestSermon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: "#F4E9CD", minHeight: "100vh" }}>
      <LatestSermon />
      <LatestSermon />
      <LatestSermon />
    </div>
  )
}

export default App
