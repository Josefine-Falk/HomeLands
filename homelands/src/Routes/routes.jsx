import { Switch, Route, Redirect } from "react-router";
import { Boliger } from "../pages/Boliger/Boliger";
import { FrontPage} from "../pages/FrontPage/FrontPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export function Routes() {
    return(
        <Switch>
            <Route exact path="/Frontpage">
                <FrontPage/>
            </Route>

            <Route exact path="/Boliger">
                <Boliger/>
            </Route>

            <Route exact path="/Boliger/:id">
                <Boliger/>
            </Route>

            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path=''>
                <Redirect to='/Frontpage'/>
            </Route>  
        </Switch>
    )
}
