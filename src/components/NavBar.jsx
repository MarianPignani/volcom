import { Link, NavLink } from "react-router-dom";
import volcomImg from "../img/img-logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="contenedor">
            <div className="contenedor-logo">
                <Link to={'/'}>
                    <img src={volcomImg} alt="Logo" className="logo" />
                </Link>   
                <div>
                    <CartWidget />
                </div>
            </div>
            <div className="contenedor-nav">
                <nav className="barra">
                    <ul className="listas">
                        <li className="lista"><NavLink className="menu" to={'/'}>PRODUCTOS</NavLink></li>
                        <li className="lista"><NavLink className="menu" to={'/categoria/classic'}>CLASSIC</NavLink></li>
                        <li className="lista"><NavLink className="menu" to={'/categoria/flexfit'}>FLEXFIT</NavLink></li>
                        <li className="lista"><NavLink className="menu" to={'/categoria/fivecap'}>FIVECAP</NavLink></li>
                        <li className="lista"><NavLink className="menu" to={'/categoria/trucker'}>TRUCKER</NavLink></li>
                        <li className="lista"><NavLink className="menu" to={'/categoria/sombreros'}>SOMBREROS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;