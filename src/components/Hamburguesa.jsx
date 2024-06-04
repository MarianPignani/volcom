import menu from "../img/menu.png";

const Hamburguesa = (props) => {
    return (

        <div className="contenedor-nav" onClick={props.click}>
            <img className="menuH" src={menu} alt="menu" />
        </div>
    )
}

export default Hamburguesa;