import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import carro from "../img/carro-compras.png";
import { CartContext } from './context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="contenedor-carrito">
            <Link to= "/carrito"><img src={carro} alt="carrito de compras" className="carrito" /></Link><span >{cantidadEnCarrito()}</span>
        </div>
    )
}

export default CartWidget;