import './styles/App.css'
import Projects from "./components/Projects"
import About from "./components/About"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"

function App() {
  const [showMore, setShowMore] = useState(false)
  // const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex flex-col bg-primary-500">
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
        <div className="relative w-full flex flex-col border border-primary-100 rounded-r-2xl px-3 py-2">
          <p className="text-white text-3xl font-bold mb-2">Proyectos</p>

          <Projects showAll={showMore} />

          {/* Botón flecha */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-500 text-primary-100 border border-primary-100 rounded-full p-2 hover:bg-primary-100 hover:text-primary-500 transition"
              title="Mostrar más"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}

          {/* Botón Ver todos */}
          <button
            onClick={() => console.log("Ver todos")}
            className="self-end mt-4 text-sm text-primary-100 underline hover:text-white"
          >
            Ver todos
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;