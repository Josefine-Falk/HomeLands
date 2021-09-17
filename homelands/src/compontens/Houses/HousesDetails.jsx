import { useEffect, useState } from "react";
import {useParams} from 'react-router';
import { myCostumFetch } from "../../helpers/fetch";
import Style from './housesdetail.module.scss';
import Like from '../../assets/Like.png';
import Card from '../../assets/House Detail Card.png';
import Foto from '../../assets/House Detail Foto.png';
import Plan from '../../assets/House Detail Plan.png';
import {Link } from 'react-router-dom'

//Errorfunction til HouseDetails
export const HousesDetails = () => {
    const [detailsData, setHousesData_details] = useState('');
    
    //Variabel med id til husene 
    const {id} = useParams()

    const getDetails = async () => {
        const url = `https://api.mediehuset.net/homelands/homes/${id}`;//url adressen med id til huse
        const result = await myCostumFetch(url)
        setHousesData_details(result);
    }

    useEffect(() => {
        getDetails();
    }, [id]);

    return(
        <section>
            <div>
                     {detailsData.item ? (  /*Henter data ud hvis de findes, hvis ikke den kan hente det ud skriver den Ingen informationer blevet fundet */
                            <>
                            <main className={Style.HousesImg}>
                                <img className={Style.images} src={detailsData.item.images[0].filename.large} alt="" />
                                
                                <div className={Style.container_info}>
                                <div>
                                <p>{detailsData.item.address}</p>
                                <p>{detailsData.item.zipcode} {detailsData.item.city}</p>
                                <p>{detailsData.item.type}</p>
                                <p>{detailsData.item.num_rooms}, {detailsData.item.floor_space}m2</p>
                                </div>

                                <div className={Style.icons}>
                                <img src={Like} alt="" />
                                <img src={Card} alt="" />
                                <img src={Foto} alt="" />
                                <img src={Plan} alt="" />
                                </div>

                                <div>
                                <p>Kontantpris {detailsData.item.price}</p>
                                <p>Udbetaling {detailsData.item.payout}</p>
                                <p>Ejerudgift {detailsData.item.cost}</p>
                                </div>
                                </div>

                                <section className={Style.houses_details}>
                               
                                <div>
                                <p>Sagsnr. {detailsData.item.id}</p>
                                <p>Boligareal {detailsData.item.floor_space}</p>
                                <p>Grundareal {detailsData.item.ground_space}</p>
                                <p>Antal rum {detailsData.item.num_rooms}</p>
                                <p>Antal plan {detailsData.item.num_floors}</p>
                                </div>

                                <div>
                                <p>Kælder {detailsData.item.basement_space}</p>
                                <p>Byggeår {detailsData.item.year_construction}</p>
                                <p>Ombygget {detailsData.item.year_rebuilt}</p>
                                <p>Energimærke {detailsData.item.energy_label_name}</p>
                                <p>Liggetid {detailsData.item.date_friendly}</p>
                                </div>

                                <div>
                                <p>Kontantpris {detailsData.item.price}</p>
                                <p>Udbetaling {detailsData.item.payout}</p>
                                <p>Brutto ex. ejerudgift {detailsData.item.gross}</p>
                                <p>Netto ex. ejerudgift {detailsData.item.net}</p>
                                <p>Ejerudfigt {detailsData.item.cost}</p>
                                </div>
                                </section>

                                <div className={Style.details_text}>
                                    <p>{detailsData.item.description}</p>
                                    
                                </div>

                                <section className={Style.contact_details}>
                                    <h4>Kontakt</h4>
                                    <img src={detailsData.item.staff.image} alt="" />
                                    <p>{detailsData.item.staff.firstname} {detailsData.item.staff.lastname}</p>
                                    <p>{detailsData.item.staff.position}</p>
                                    <p>Mobil: {detailsData.item.staff.phone}</p>
                                    <p>Email: {detailsData.item.staff.email}</p>

                                </section>
                            </main>
                            
                            </>
                    ): ( 
                        <p>Ingen informationer blev fundet</p>
                    )}
                </div>
        </section>
    )
}