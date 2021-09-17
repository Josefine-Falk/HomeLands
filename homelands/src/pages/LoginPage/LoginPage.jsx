import { ReviewDelete } from "../../compontens/deletefunctions/rewiewdelete";
import { Login } from "../../compontens/Login/login";
import Style from './Loginpage.module.scss';

export function LoginPage() {
    return(
        <>
        <main className={Style.container_login}>
            <div>
                <ReviewDelete/>
            </div>
            <div>
        <h1>Login</h1>
        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
        <Login/>
        </div>
        </main>
        </>
    )
}