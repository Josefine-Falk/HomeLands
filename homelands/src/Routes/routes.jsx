import { Switch, Route, Redirect } from "react-router";
import { Comments } from "../compontens/comments/Comments";
import { HousesDetails } from "../compontens/Houses/HousesDetails";
import { HousesList } from "../compontens/Houses/HousesList";
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

            <Route path="/Boliger/:id">
                <HousesDetails/>
            </Route>

            <Route exact path="/login">
                <LoginPage/>
            </Route>

            <Route>
                <Comments/>
            </Route>
            <Route exact path=''>
                <Redirect to='/Frontpage'/>
            </Route>

        </Switch>
    )
}
