import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'
import ImgOculos from '../../assets/images/imagemIA/imgOculosIa2.png'
import { Link } from 'react-router-dom'

function IA(){
    return(
        <>
        <NavbarPadrao/>
        
        <section className='imgPrincipalTelaIa'>
            {/*A imagem vai como background dessa section*/}
        </section>

        <div className='AlinhaTextoNossaEquipe'>
            <h1 className='tituloNossaEquipe tituloIA'>TESTE A NOSSA IA OU FILTRO</h1>
        </div>

        <section className='ContainerIAeFiltro'>
            <div className="OculosEscolhaIa">
                <img src={ImgOculos} alt="" className='FotoOculosIA'/>
                {<Link to={"/filtro"} className='btnFiltroTelaIa'>FILTRO</Link>}
                {<Link to={"/testeIa"} className='btnIaTelaIa'>LENSKIDS IA</Link>}
            </div>
        </section>

        <FooterPadrao/>
        </>
    )
}

export default IA