import React from 'react'

const About = () => {
    return (
        <div className="w-full flex flex-col text-white gap-2 px-12">
            <p>Sobre mi</p>
            <p className="text-sm">Hola! Soy Yuri Monroy, desarrolladora full-stack. Quiero orientar mi carrera a desarrollos backend donde pueda enfrentarme a retos nuevos y desafiantes, y, a su vez, ofrecerle al usuario de forma linda todo lo interesante y bacano que se puede lograr.</p>
            <p className="text-sm">He estado aprendiendo nuevas tecnologias y la mejor manera de mostrar estos conocimientos es en los proyectos que hay en este portafolio.</p>
            <p className="text-sm">Me interesa participar en proyectos innovadores, cualquier idea es bienvenida </p><a href="#" className="font-light"> aqui.</a>
            {/* <p>Hola! Soy Yuri Monroy, una desarrolladora de software con experiencia en el desarrollo de aplicaciones web. Me apasiona crear soluciones innovadoras y eficientes que mejoren la experiencia del usuario. Tengo habilidades en una variedad de tecnologías, incluyendo React, Node.js, y Python. Estoy siempre buscando aprender y crecer en mi carrera, y estoy emocionada por las oportunidades que el futuro me depara.</p> */}

            <div>
                {/* <h1 className="text-2xl font-bold">Habilidades</h1>
                <ul className="list-disc list-inside">
                    <li>Desarrollo Frontend: React, JavaScript, HTML, CSS</li>
                    <li>Desarrollo Backend: Node.js, Express, MongoDB</li>
                    <li>Control de Versiones: Git, GitHub</li>
                    <li>Metodologías Ágiles: Scrum, Kanban</li>
                </ul> */}

                <p>Redes</p>
                <p>Github</p>
                <p>Linkdin</p>
            </div>
        </div>
    )
}

export default About
