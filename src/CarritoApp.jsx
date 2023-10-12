import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductosProvider } from './pages/context/ProductosProvider'
import { CarritoProvider } from './pages/CarritoProvider'


export const CarritoApp = () => {
    return (

        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ComprasPage></ComprasPage>}>
                        </Route>
                        <Route path='/carrito' element={<CarritoPage></CarritoPage>}>
                        </Route>
                        <Route path='/*'>
                        </Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>



    )
}
