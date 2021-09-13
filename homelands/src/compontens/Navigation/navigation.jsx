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
                <Link to="/Boliger">Boliger til Salg</Link>
            </li>

            <li>
                <Link to="/Login">Login</Link>
            </li>

        </ul>
        </nav>
        </>
    )
}