import LatestSermon from './components/LatestSermon'
import WeeklyTeaching from './components/WeeklyTeaching'
import OurMissions from './components/OurMissions'
import KamloopsImage from './components/KamloopsImage'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <div style={{ backgroundColor: "#F4E9CD", minHeight: "100vh" }}>
      {/* <NavigationBar /> */}
      <KamloopsImage />
      <LatestSermon />
      <WeeklyTeaching />
      <OurMissions />
    </div>
  )
}

export default App
