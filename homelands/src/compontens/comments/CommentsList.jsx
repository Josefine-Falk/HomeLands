import { useContext, useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch"
import { AuthContext } from "../Login/AuthProvider"
import Style from './comments.module.scss';

export const CommentsList = (props) => {
    const [apiData, setApiData] = useState()
    const {loginData} = useContext(AuthContext)
    const id = props.itemId;

    const getData = async () => {
        const url = `https://api.mediehuset.net/homelands/reviews`
        const options = {
            method: 'GET',
            headers: {
                'Authorization' : `Baerer ${loginData.access_token}`
            }
        }
        try{
            const result = await myCostumFetch(url, options);
            setApiData(result);
        }
        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if(loginData) {
            getData();
        }
    }, [loginData, id])

    return(
        <>
        <h4>Kommentarer</h4>
        <ul>
            {apiData && apiData.items.map((item, key) => {
                return(
                    <>
                    <main className={Style.commentsList}>
                     <div className={Style.commenttext}>
                    <li key={key}>{item.title}</li>
                    <p>{item.content}</p>
                    </div>
                    </main>
                    </>
                )
            })}
        </ul>
        </>
    )
}