import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">

        {
            carrito.map((prod) => (
                <div key={prod.id} className='div-carrito'>
                    <br />
                    <img className="img-carrito" src={prod.imagen} alt={prod.nombre}/>
                    <h3>{prod.nombre}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <div className='cont-compra'>
                <div className='div-compra'>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <div>
                        <button onClick={handleVaciar} className='btn-vaciar'>Vaciar</button>
                    </div>
                    <div>
                        <Link to="/checkout" className='fin'><button className='btn-fin'>Finalizar compra</button></Link>
                    </div>
                    
                </div>
                
            </div> :
            <div className='div-vacio'>
                <h2 className='vacio'>El carrito está vacío!</h2>
                <Link to={"/"} className="volver"><button className='btn-principal'>Volver a la Página Principal</button></Link>
            </div>
        }
        
    </div>
  )
}

export default Carrito