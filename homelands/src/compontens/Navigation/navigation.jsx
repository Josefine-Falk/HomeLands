import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";
import Style from './navigation.module.scss';
import { useState } from 'react';

export function Navigation() {
    const [menuActive, setMenuActive] = useState(false)
    return(
        <>
        <nav className={Style.nav_container} >
            <Link to="/Frontpage"><img className={Style.logo} src={Logo} alt="" /></Link>
        <ul className={menuActive ? Style.active : null}>
            <li>
                <Link onClick={() => setMenuActive(false)} to="/Frontpage">Forside</Link>
            </li>

            <li>
                <Link onClick={() => setMenuActive(false)} to="/Boliger">Boliger til Salg</Link>
            </li>

            <li>
                <Link onClick={() => setMenuActive(false)} to="/Login">Login</Link>
            </li>
            
        </ul>
        <p onClick={() => setMenuActive(!menuActive)} className={ Style.burgermenu} >{menuActive ? 'luk' : 'menu'}</p>
        </nav>
        </>
    )
}