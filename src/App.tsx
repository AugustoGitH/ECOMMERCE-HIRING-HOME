import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Labor from "./pages/Labor"
import SearchLaborResults from "./pages/SearchLaborResults"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/labor/:id" element={<Labor />} />
      <Route path="/labor-search/:query" element={<SearchLaborResults />} />
    </Routes>
  )
}

export default App
