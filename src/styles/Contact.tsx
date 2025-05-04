import React from 'react'

const Contact = () => {
    return (

        <div className="w-full text-white flex flex-col">
            {/* Idea COntacto */}
            <p>Formulario de contacto</p>
            <form className="w-full flex flex-col">
                <input type="text" placeholder="Tu nombre" className="border-2 border-primary-100 rounded-lg px-2 py-1 mb-2" />
                <input type="email" placeholder="Correo electrónico" className="border-2 border-primary-100 rounded-lg px-2 py-1 mb-2" />
                <input type="text" placeholder="Subject" className="border-2 border-primary-100 rounded-lg px-2 py-1 mb-2" />
                <textarea placeholder="Mensaje" className="border-2 border-primary-100 rounded-lg px-2 py-1 mb-2"></textarea>
            </form>
        </div>
    )
}

export default Contact
