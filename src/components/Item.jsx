import {Link} from "react-router-dom";

const Item = ({item}) => {
    return (
        
            <div className="cont-prod">
              <Link to={'/item/' + item.id}><img className="img-prod" src={item.imagen} alt={item.nombre}/></Link>
                <h3 className="nombre-prod">{item.nombre}</h3>
                <p className="">${item.precio}</p>
            </div>
        
    )
}

export default Item;