import { useEffect, useState } from "react";
import { myCostumFetch } from "../../helpers/fetch";
import {Link} from 'react-router-dom';
import Style from './Houses.module.scss';

export const HousesList = () => {
    const [housesData, setHousesData] = useState('');

    const getHouses = async () => {
        const url = 'https:api.mediehuset.net/homelands/homes';
        const result = await myCostumFetch(url)
        setHousesData(result);
        console.log(result);
    };

    useEffect(() => {
        getHouses();
    })

    return(
        <section className={Style.houses_list}>
            {housesData && housesData.items.map((item, key) => {
                return(
                    <>
                    <Link to={`Boliger/${item.id}`}>
                        <main className={Style.container_list} >
                            <img className={Style.houses_img} src={item.images[0].filename.medium} alt="" />
                            <p>{item.address}</p>
                            <p>{item.zipcode} {item.city}</p>
                            <p>{item.type}</p>
                            <p>{item.energy_label_name} {item.num_rooms}, {item.floor_space}m2 {item.price}DKK</p>
                        </main>
                    </Link>
                    </>
                )
            })}
        </section>
    )
}