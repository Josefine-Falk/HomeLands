import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";
import Style from './navigation.module.scss';

export function Navigation() {
    return(
        <>
        <nav className={Style.nav_container}>
            <img className={Style.logo} src={Logo} alt="" />
        <ul className={Style.nav_ul}>

            <li>
                <Link to="/Frontpage">Forside</Link>
            </li>

            <li>
                <Link to="/Sales">Salgs- og handelbetingelser</Link>
            </li>

            <li className={Style.login_button}>
                <Link to="/login">Login</Link>
            </li>
            <li><Link to="/products">Produkter</Link></li>&nbsp;
            <li>
                <Link to="/shoppingcart">Shoppingcart</Link>
            </li>
            <li>
                <Link to="/comments">Kommentarer</Link>
            </li>
            <div>
                <Link to="/payment"><img className={Style.cart_icon} src={cart_icon} alt="" /></Link>
            </div>

            <div className={Style.string_contact}>
            <p>SALES@STRINGSONLINE.COM</p>
            <p className={Style.phonenr}>+45 98 12 22 68</p>
            </div>

            <div className={Style.search}>
                <input type="text" placeholder="Indtast søgeord" />
            </div>
        </ul>
        </nav>
        </>
    )
}