import Carousel from 'react-material-ui-carousel';
import Style from './header.module.scss';


//Function til min slider på forsiden
export function HeaderSlider() {
    const carouselItems = [ //array med de 3 billeder jeg skal have med i slidshowet 
        {
            url: 'https://api.mediehuset.net/images/homelands/medium/apartment-3.jpg',
            alt: "bølgen_bolig"
        }, 
        {
            url: 'https://api.mediehuset.net/images/homelands/medium/apartment-2.jpg',
            alt: "bolig_lejligheder"
        },
        {
            url: 'https://api.mediehuset.net/images/homelands/medium/house-3.jpg',
            alt: "bolig_villa"
        }
    ]
    
    function Item(props){
        return(
            <div className={Style.container}>
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

