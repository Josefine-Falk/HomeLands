import Carousel from 'react-material-ui-carousel';
import Style from './header.module.scss';
export function HeaderSlider() {

    const carouselItems = [
        {
            url: 'https://api.mediehuset.net/images/homelands/medium/apartment-3.jpg',
            alt: "bølgen_bolig"
        }, 
        {
            url: 'https://api.mediehuset.net/images/homelands/medium/apartment-2.jpg',
            alt: "bolig_lejligheder"
        }
    ]
    function Item(props){
        return(
            <div style={{Height:"35vh"}}>
                <img className={Style.header_img} src={props.item.url} alt="" />
            </div>
        )
    }
    return(
        <>
        <Carousel animation="fade" interval="5000" indicators={false}>
            {
            carouselItems.map((item, index) => {
                return(
                    <Item key={index} item={item}/>
                )
            })
            }
        </Carousel>
        </>
    )
}

