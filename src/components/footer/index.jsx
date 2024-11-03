import './style.css'
import { Link } from 'react-router-dom';
import logoFooter from '../../assets/images/logo/logoFooter.svg'
import logoInstagram from '../../assets/images/iconesRedesSociais/instagram.svg'
import logoFacebook from '../../assets/images/iconesRedesSociais/facebook.svg'
import logoLinkedin from '../../assets/images/iconesRedesSociais/linkedin.svg'
import logoTiktok from '../../assets/images/iconesRedesSociais/tiktok.svg'

function FooterPadrao(){
    return(
       <footer className='estiloFooter'>

        <div className="imagemLogo">
            <img src={logoFooter} alt=""  width="150" height="50" />
        </div>

        <div className="textoFooter">
            © Tevejo | Todos os direitos reservados | 2024.
        </div>

        <div className='redesSociaisFooter'>
            <a href="#"><img src={logoInstagram} alt="logo"  width="30" height="30" /></a>
            <a href="#"><img src={logoFacebook} alt=""   width="30" height="30" /></a>
            <a href="#"><img src={logoLinkedin} alt=""   width="30" height="30" /></a>
            <a href="#"><img src={logoTiktok} alt=""  width="30" height="30"  /></a>
        </div>

        <div className="linkSobreEquipeFooter">
            {<Link to={"/sobre"} className='btnFooter'>Conheça nossa equipe</Link>}
        </div>
        
       

       </footer>
    )
}

export default FooterPadrao;