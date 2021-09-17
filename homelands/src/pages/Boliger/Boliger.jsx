import { HousesList } from '../../compontens/Houses/HousesList';
import Style from './boliger.module.scss';
export function Boliger() {
    return(
        <>
        <section className={Style.contentContainer}>
        <h1 >Boliger til salg</h1>
        <HousesList/>
        </section>
        </>
    )
}