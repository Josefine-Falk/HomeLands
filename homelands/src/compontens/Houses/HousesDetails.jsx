import { useEffect, useState } from "react";
import {useParams} from 'react-router';
import { myCostumFetch } from "../../helpers/fetch";
import {Link} from 'react-router-dom';
import Style from './housesdetail.module.scss';

export const HousesDetails = () => {
    const [detailsData, setHousesData_details] = useState('');
    
    const {id} = useParams()

    const getDetails = async () => {
        const url = `https://api.mediehuset.net/homelands/homes/${id}`;
        const result = await myCostumFetch(url)
        setHousesData_details(result);
    }

    useEffect(() => {
        getDetails();
    }, [id]);

    return(
        <section>
            <div>
                    {detailsData.item ? (
                        
                            <>
                            <div className={Style.HousesDetails}>
                                <img src={detailsData.item.images[0].filename.large} alt="" />
                                <p>{detailsData.item.id}Sagsnr. </p>
                                <p>{detailsData.item.floor_space}Boligareal </p>
                                <p>{detailsData.item.ground_space}Grundareal</p>
                                <p>{detailsData.item.num_rooms}Antal rum</p>
                                <p>{detailsData.item.num_floors}Antal plan</p>

                                <p>{detailsData.item.basement_space}Kælder</p>
                                <p>{detailsData.item.year_construction}Byggeår</p>
                                <p>{detailsData.item.year_rebuilt}Ombygget</p>
                                <p>{detailsData.item.energy_label_name}Energimærke</p>
                                <p>Liggetid</p>

                                <p>Kontantpris</p>
                                <p>Udbetaling</p>
                                <p>Brutto ex. ejerudfigt</p>
                                <p>Netto ex. ejerudfigt</p>
                                <p>Ejerudfigt</p>
                            </div>
                            </>
                    ): ( 
                        <p>No houses found</p>
                    )}
                </div>
        </section>
    )
}