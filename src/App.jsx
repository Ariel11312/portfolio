import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Portfolio from "./Portfolio"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
