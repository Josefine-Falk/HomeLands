import { useContext, useEffect, useState } from "react";
import { AuthContext} from '../Login/AuthProvider';
import { FetchDelete, myCostumFetch } from "../../helpers/fetch";

export const ReviewDelete = (props) => {
    const {loginData} = useContext(AuthContext)
    const [deleteData, setDeleteData] = useState()
    const [user, setUser] = useState()
    const id = props.itemId;

    const getReviwes = async () => {
        const url = `https://api.mediehuset.net/homelands/reviews`
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Baerer ${loginData.access_token}`
            }
        }
        try {
            const result = await myCostumFetch(url, options);
            setDeleteData(result);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (loginData) {
            getReviwes();
        }
    }, [loginData, id])

    useEffect(() => {
        let userFilter = deleteData && deleteData.items.filter(item => item.user.username === "jofa")
        setUser(userFilter)
    }, [deleteData])

    const deleteReview = async (reviewId) => {
        const url = `https://api.mediehuset.net/homelands/reviews/${reviewId}`
        try{
            const result = await FetchDelete(url, null, loginData.access_token)
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
                    <section key={key}>
                        <li>{item.title}</li>
                        <p>{item.content}</p>
                        <button type="button" onClick={(() => deleteReview(item.id))}>Slet din kommentar</button>
                    </section>
                )
            })}
        </section>
    )
}