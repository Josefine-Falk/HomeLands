import { ReviewDelete } from "../../compontens/deletefunctions/rewiewdelete";
import { Login } from "../../compontens/Login/login";

export function LoginPage() {
    return(
        <>
        <main>
            <div>
                <ReviewDelete/>
            </div>
        <h2>Login</h2>
        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
        <Login/>
        </main>
        </>
    )
}