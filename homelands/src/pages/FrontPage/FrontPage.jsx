import {Review} from "../../compontens/anmeldelser/anmeldelser";
import { Employees } from "../../compontens/employess/employess";
import { HeaderSlider } from "../../compontens/header/header";
import { HouseView } from "../../compontens/houseFrontPage/houseFrontPage";
import Style from './FrontPage.module.scss';
import {Link} from 'react-router-dom';

export function FrontPage() {
    return(
        <>
        <HeaderSlider/>
        <HouseView/>
        <h3 className={Style.customers}>Det siger kunderne:</h3>
        <Review/>
        <h5 className={Style.reviews}><Link to="/comments">Skriv en anmeldelse</Link> </h5>
        <h3 className={Style.employees}>Mød vores ansatte</h3>
        <Employees/>
        </>
    )
}