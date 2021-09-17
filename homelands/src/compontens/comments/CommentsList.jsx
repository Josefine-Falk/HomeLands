import { useContext, useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch"
import { AuthContext } from "../Login/AuthProvider"
import Style from './comments.module.scss';

//CommentsList = Til at vise hvilke kommentarer der er lavet

export const CommentsList = (props) => {
    const [apiData, setApiData] = useState()
    const {loginData} = useContext(AuthContext)
    const id = props.itemId;

    //Function getData til at hente data ud
    const getData = async () => {
        const url = `https://api.mediehuset.net/homelands/reviews`
        const options = {
            method: 'GET',
            headers: {
                'Authorization' : `Baerer ${loginData.access_token}`
            }
        }
        try{//Fetch function som bruger url og options til url
            const result = await myCostumFetch(url, options);
            setApiData(result);//Viser resultet 
        }
        catch(error) { //Fanger hvis der er en fejl 
            console.error(error);
        }
    }
    useEffect(() => { 
        if(loginData) { //Hvis man er logget ind 
            getData(); //Så viser den data fra getData
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