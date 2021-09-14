import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './Houses.module.scss';


export const Houses = () => {
    const [housesData, setHousesData] = useState('');

    const getHouseView = async () => {
        const url = 'https://api.mediehuset.net/homelands/homes';
        const result = await myCostumFetch(url)
        setHousesData(result);
    }
    useEffect(() => {
        getHouseView();
    }, [])
    console.log(housesData);

    return(
        <>
        <section className={Style.houses_container} >{housesData && housesData.items.map((item, key) => {
            return(
                <div key={key}>
                    <img src={item.images} alt="" />
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