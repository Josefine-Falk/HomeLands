import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './housefrontpage.module.scss';

//Errorfunction og variabel til at vise de 3 huse på forsiden
export const HouseView = () => {
    const [houseData, setHouseData] = useState('');

    const getHouseView = async () => { //Variabel med hent huse ud
        const url = 'https://api.mediehuset.net/homelands/homes'; 
        const result = await myCostumFetch(url)
        setHouseData(result);
    }
    useEffect(() => {
        getHouseView();
    }, [])
    console.log(houseData);

    return(
        <>
        <section className={Style.container_houseview}>{houseData && houseData.items.splice(0,3).map((item, key) => {
            return(
                <div className={Style.content_container} key={key}>
                    <img className={Style.img_houses} src={item.images[0].filename.medium} alt="" />
                    <p>{item.address}</p>
                    <p>{item.zipcode} {item.city}</p>
                    <p>{item.type}</p>
                    <p>{item.energy_label_name} {item.num_rooms}, {item.floor_space}m2 {item.price}DKK</p>
                </div>
            )
        })}
        </section>
        </>
    )
}