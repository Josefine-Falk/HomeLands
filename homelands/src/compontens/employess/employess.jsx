import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './employess.module.scss';

export const Employees = () => {
    const [staffData, setStaffData] = useState('');

    const getStaff = async () => {
        const url = 'https://api.mediehuset.net/homelands/staff';
        const result = await myCostumFetch(url)
        setStaffData(result);
    }

    useEffect(() => {
        getStaff();
    }, [])
    console.log(staffData);


    return(
        <>
        <section className={Style.container_staff}>{staffData && staffData.items.map((item, key) => {
            return(
                <>
                <figure className={Style.img_container}>
                    <img className={Style.staff_img} src={item.image} alt="" />
                        <h3>{item.firstname} {item.lastname}</h3>
                        <p>{item.position}</p>

                    
                 <figcaption>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                     </figcaption>

                </figure>
                </>
            )
        })}

        </section>
        </>
    )
}