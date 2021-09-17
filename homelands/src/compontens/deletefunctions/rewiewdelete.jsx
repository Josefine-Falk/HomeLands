import { useContext, useEffect, useState } from "react";
import { AuthContext} from '../Login/AuthProvider';
import { FetchDelete, myCostumFetch } from "../../helpers/fetch";
import Style from './delete.module.scss';


//Function til at delete kommentarer
export const ReviewDelete = (props) => {
    const {loginData} = useContext(AuthContext)
    const [deleteData, setDeleteData] = useState() //Variabel til deleteData
    const [user, setUser] = useState() //Variabel til user
    const id = props.itemId; 

    //Variabel til at hente reviews
    const getReviwes = async () => {
        const url = `https://api.mediehuset.net/homelands/reviews`
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Baerer ${loginData.access_token}`
            }
        }
        try {//Lover at vente med at gå videre indtil der er kommet data tilbage fecthfunction
            const result = await myCostumFetch(url, options);
            setDeleteData(result);
        }
        catch(error) {//Viser hvis der er en fejl
            console.log(error);
        }
    }

    useEffect(() => {
        if (loginData) { //Hvis man er logget ind
            getReviwes(); //Så viser det getReviews
        }
    }, [loginData, id])

    useEffect(() => { //Til at filter efter kommentarer som er oprettet af den bruger der er logget ind, så kan man slettet den igen
        let userFilter = deleteData && deleteData.items.filter(item => item.user.username === "jofa")
        setUser(userFilter)
    }, [deleteData])

    //Variabel og errorfunction til at hentet review med reviewid
    const deleteReview = async (reviewId) => {
        const url = `https://api.mediehuset.net/homelands/reviews/${reviewId}`
        try{
            const result = await FetchDelete(url, null, loginData.access_token)//venter på at url har været igennem fetchdelete 
            getReviwes();
        }
        catch (error) {
            console.log(error);
        }
    }

    return(
        <section>
            <div>
                <h2>Dine anmeldelser</h2>
            </div>
            {user && user.map((item, key, i) => {
                return(
                    <section className={Style.delete} key={key}>
                        <li>{item.title}</li>
                        <p>{item.content}</p>
                        <button className={Style.button_slet} type="button" onClick={(() => deleteReview(item.id))}>Slet din kommentar</button>
                    </section>
                )
            })}
        </section>
    )
}