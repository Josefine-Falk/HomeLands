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
                <div key={key}>
                    <img className={Style.staff_img} src={item.image} alt="" />
                    <p>{item.firstname} {item.lastname}</p>
                    <p>{item.position}</p>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                </div>
                </>
            )
        })}

        </section>
        </>
    )
}