import { useEffect, useState } from "react";
import { Route, useParams, Switch} from 'react-router';
import {Link} from "react-router-dom";
import { myCostumFetch } from "../../helpers/fetch";

export const Houses = () => {
    const [housesData, setHousesData] = useState('');
    const [detailsData, setHousesData_details] = useState('');

    const {id} = useParams()

    const getHouses = async () => {
        const url = 'https:api.mediehuset.net/homelands/homes';
        const result = await myCostumFetch(url)
        setHousesData(result);
    };

    const getDetails = async () => {
        const url = `https://api.mediehuset.net/homelands/homes/${id}`;
        const result = await myCostumFetch(url)
        setHousesData_details(result);
    }

    useEffect(() => {
        getHouses();
        getDetails();
    }, [id]);
    console.log(id);

    return(
        <Switch>
            <Route exact path="/Boliger">
                <div>
                    {housesData && housesData.items.map((item, key) => {
                        return(
                            <>
                            <Link to={`Boliger/${item.id}`}>
                                <div key={key}>
                                    <img src={item.images[0].filename.medium} alt="" />
                                    <p>{item.address}</p>
                                    <p>{item.zipcode} {item.city}</p>
                                    <p>{item.type}</p>
                                    <p>{item.energy_label_name} {item.num_rooms}, {item.floor_space}m2 {item.price}DKK</p>
                                </div>
                            </Link>
                            </>
                        )
                    })}
                </div>
            </Route>

            <Route exact path="/Boliger/:id">
                <section>
                    {detailsData && detailsData.items.map((item, key) => {
                        return(
                            <>
                            <Link to={`/Boliger/${id}/${item.id}`}>
                            <div key={key}>
                                <p>Sagsnr. </p>
                                <p>Boligareal </p>
                                <p>Grundareal</p>
                                <p>Antal rum</p>
                                <p>Antal plan</p>

                                <p>Kælder</p>
                                <p>Byggeår</p>
                                <p>Ombygget</p>
                                <p>Energimærke</p>
                                <p>Liggetid</p>

                                <p>Kontantpris</p>
                                <p>Udbetaling</p>
                                <p>Brutto ex. ejerudfigt</p>
                                <p>Netto ex. ejerudfigt</p>
                                <p>Ejerudfigt</p>
                            </div>
                            </Link>
                            </>
                        );
                    })}
                </section>
            </Route>
        </Switch>
    )
}










































































//import { useEffect, useState } from "react"
// import { myCostumFetch } from "../../helpers/fetch";
// import Style from './Houses.module.scss';


// export const Houses = () => {
//     const [housesData, setHousesData] = useState('');

//     const getHouseView = async () => {
//         const url = 'https://api.mediehuset.net/homelands/homes';
//         const result = await myCostumFetch(url)
//         setHousesData(result);
//     }
//     useEffect(() => {
//         getHouseView();
//     }, [])
//     console.log(housesData);

//     return(
//         <>
//         <section className={Style.houses_container} >{housesData && housesData.items.map((item, key) => {
//             return(
//                 <div key={key}>
//                     <img src={item.images} alt="" />
//                     <p>{item.address}</p>
//                     <p>{item.zipcode} {item.city}</p>
//                     <p>{item.type}</p>
//                     <p>{item.energy_label_name} {item.num_rooms}, {item.floor_space}m2 {item.price}DKK</p>
                    

//                 </div>
//             )
//         })}

//         </section>
//         </>
//     )
// }