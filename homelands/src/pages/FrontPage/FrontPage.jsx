import {Review} from "../../compontens/anmeldelser/anmeldelser";
import { Employees } from "../../compontens/employess/employess";
import { HeaderSlider } from "../../compontens/header/header";
import Style from './FrontPage.module.scss';

export function FrontPage() {
    return(
        <>
        <HeaderSlider/>
        <h3 className={Style.customers}>Det siger kunderne:</h3>
        <Review/>
        <h3 className={Style.employees}>Mød vores ansatte</h3>
        <Employees/>
        </>
    )
}