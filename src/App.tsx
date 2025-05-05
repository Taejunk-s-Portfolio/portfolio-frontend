import './styles/App.css'
import Projects from "./components/Projects"
import About from "./components/About"
import { useState } from "react"
import Experience from "./components/Experience"
// import { useNavigate } from "react-router-dom"

function App() {
  const [showAll, setShowAll] = useState(false)
  // const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col bg-primary-500">
      <div className="w-full h-[10%] flex justify-center items-center">
        <div className="flex flex-row justify-center items-center text-white gap-4 rounded-2xl border-1 border-primary-100 px-3 py-2">
          <nav className="text-sm font-bold">Projects</nav>
          <nav className="text-sm font-bold">Experience</nav>
          <nav className="text-sm font-bold">Contact</nav>
          <nav className="text-sm font-bold">About</nav>
          <nav className="text-sm font-bold">Skills</nav>
          <nav className="text-sm font-bold">Education</nav>
        </div>
      </div>

      <div className="w-full h-[90%] flex flex-col px-2 relative">
        <p className="text-white text-3xl font-bold mb-2">Proyectos</p>
        <div className="relative w-full flex flex-col border border-primary-100 rounded-r-2xl px-3 py-2">

          <Projects showAll={showAll} />

          {/* Botón Ver todos */}
          <button
            onClick={() => setShowAll(true)}
            // onClick={() => navigate("/projects")}
            className="self-end mt-4 text-sm text-primary-100 underline hover:text-white"
          >
            Ver todos
          </button>
        </div>

        <div className="w-full mt-5 px-3 py-2">
          <p className="text-white text-3xl font-bold mb-2">Experiencia</p>
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default App
