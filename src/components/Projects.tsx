import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

interface IParamsShow {
    maxToShow?: number;
    showAll?: boolean;
}
const Projects = ({ maxToShow = 3, showAll = false }: IParamsShow) => {

    const data = [
        {
            id: 1,
            title: "Control gastos1",
            description: "Este aplicativo web permite ingresar un monto general y sobre el definir gastos que se pueden clasificar en diferentes categorias",
            image: "https://via.placeholder.com/150",
            tags: ["React", "TypeScript"]
        },
        {
            id: 2,
            title: "Control gastos2",
            description: "Este aplicativo web permite ingresar un monto general y sobre el definir gastos que se pueden clasificar en diferentes categorias",
            image: "https://via.placeholder.com/150",
            tags: ["React", "TypeScript"]
        },
        {
            id: 3,
            title: "Control gastos3",
            description: "Este aplicativo web permite ingresar un monto general y sobre el definir gastos que se pueden clasificar en diferentes categorias",
            image: "https://via.placeholder.com/150",
            tags: ["React", "TypeScript"]
        },
        {
            id: 4,
            title: "Control gastos4",
            description: "Este aplicativo web permite ingresar un monto general y sobre el definir gastos que se pueden clasificar en diferentes categorias",
            image: "https://via.placeholder.com/150",
            tags: ["React", "TypeScript"]
        }
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;

        if (container) {
            const scrollAmount = container.offsetWidth * 0.8; // Scroll 80% of the container width
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    const displayedProjects = showAll ? data : data.slice(0, maxToShow);

    return (
        <div className="relative w-full">

            {!showAll && (
                <>
                    <button
                        className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-primary-500 text-primary-100 border border-primary-100 rounded-full p-2 hover:bg-primary-100 hover:text-primary-500 transition"
                        onClick={() => scroll('left')}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-primary-500 text-primary-100 border border-primary-100 rounded-full p-2 hover:bg-primary-100 hover:text-primary-500 transition"
                        onClick={() => scroll('right')}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </>
            )}

            <div
                ref={scrollRef}
                className={`w-full overflow-x-auto no-scrollbar ${showAll ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4' : 'flex gap-4 py-4 px-2'}`}
            >
                {displayedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="w-full flex flex-col border border-primary-100 rounded-2xl bg-primary-50 p-4 gap-4"
                    >
                        <p className="text-white text-2xl font-bold">{project.title}</p>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-32 object-cover rounded-2xl"
                        />
                        <p>{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-primary-100 text-primary-500 px-2 py-1 rounded-full text-xs font-semibold"
                                >{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
