import App from "../App";

function NavigationBar() {

  return (
    <div>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<App />} />
          <Route path="/sermons" element={<App />} />
          <Route path="/contact" element={<App />} />
      </Routes>
    </div>
  )
}

export default NavigationBar
