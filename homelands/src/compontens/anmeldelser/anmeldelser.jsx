import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './anmeldelser.module.scss';


export const Review = () => {
    const [reviewData, setReviewData] = useState('');

    const getReview = async () => {
        const url = 'https://api.mediehuset.net/homelands/reviews';
        const result = await myCostumFetch(url)
        setReviewData(result);
    }
    
    useEffect(() => {
        getReview();
    }, [])
    console.log(reviewData);

    return(
        <>
        <section className={Style.review_section}>{reviewData && reviewData.items.splice(0,1).map((item, key) => {
            return(
                <div key={key}>
                    <h3 className={Style.review_text}>{item.title}</h3>
                    <p>"{item.content}"</p>
                    <p className={Style.customer_info}>{item.user.firstname} {item.user.lastname}</p>
                </div>
            )
        })}
            
        </section>
        </>
    )
}