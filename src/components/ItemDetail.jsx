import ItemCount from "./ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext"

const ItemDetail = ({item}) =>  {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="cont-detail">
            <div className="div-detail">
                <div>
                    <img className="img-prod" src={item.imagen} alt={item.nombre}/>
                </div>
                <div className="div-right">
                    <h3 className="nombre-detail">{item.nombre}</h3>
                    <p className="precio-detail">${item.precio}</p>
                    <p className="descripcion">{item.descripcion}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;