import volcomFooter from "../img/logo-footer.png";
const Footer = () => {
    return (
        <div className="div-footer">
            <div className="div-img">
                <img src={volcomFooter} alt="logo" className="logo-footer" />
            </div>
            <div className="div-copy">
                <small className="copy">&copy; 2024 Volcom - All Rights Reserved</small>
            </div>
        </div>
    )     
}

export default Footer;