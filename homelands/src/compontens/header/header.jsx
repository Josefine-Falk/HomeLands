import { useEffect, useState } from "react"
import { myCostumFetch } from "../../helpers/fetch";
import Style from './header.module.scss';

export const HeaderSlider = () => {
    const [sliderData, setSliderData] = useState('');

    const getSlider = async () => {
        const url = 'https://api.mediehuset.net/homelands/images';
        const result = await myCostumFetch(url)
        setSliderData(result);
    }

    useEffect(() => {
        getSlider();
    }, [])
    console.log(sliderData);

    return(
        <>
        <ul>{sliderData && sliderData.items.splice(0,3).map((item, key) => {
            return(
                <div key={key}>
                    <img className={Style.header_img} src={item.image[1]} alt="" />
                </div>
            )
        })}
        </ul>
        </>
    )
}