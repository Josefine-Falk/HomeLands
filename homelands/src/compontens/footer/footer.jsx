import Twitter from '../../assets/Icon awesome-twitter-square.png';
import Facebook from '../../assets/Icon ionic-logo-facebook.png';
import Style from './footer.module.scss';
export function Footer() {
    return(
        <section className={Style.footer_container}>
        <p>HomeLands</p>
        <p>Øster Uttrupvej 5
            <br />
            9000 Aalborg
        </p>
        <p>Email: info@homelands.dk
            <br />
            Telefon: +45 1122 3344
        </p>
        <div>
        <img src={Twitter} alt="Twitter_logo" />
        <img src={Facebook} alt="Facebook_logo" />
        </div>
        </section>
    )
}