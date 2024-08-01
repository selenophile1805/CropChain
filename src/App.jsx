import Header from "./components/Header"
// import Hero from "./components/Hero"
import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Project from "./views/Project"

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects/:id" element={<Project />} />

      </Routes>
    </div>
  )
}

export default App
