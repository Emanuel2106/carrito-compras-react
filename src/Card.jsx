import React, { useState } from 'react'
import '../src/styles/card.css'
export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQutar, handleAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }

    const clickQuitar = () => {
        handleQutar()
        setAdded(false)
    }
    return (
        <div className='tarjeta'>
            <img src={imagen} alt={titulo} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descripcion}</p>
                <p className='tarjeta-precio'>{precio}</p>


                {added
                    ?
                    <button
                        type="button"
                        className='boton-quitar'
                        onClick={clickQuitar}
                    >Quitar del Carrito</button>

                    :

                    <button type="button" className='boton-agregar' onClick={clickAgregar}>Agregar Carrito</button>

                }
            </div>
        </div>
    )
}