import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'
import ImgOculos from '../../assets/images/imagemIA/imgOculosIa2.png'
import { Link } from 'react-router-dom'

function IA(){
    return(
        <>
        <NavbarPadrao/>

        <section className='primeiraSeccaoIA'>
            <div className="imgPrimeiraSeccaoIA">
                <div className="txtPrimeiraSeccaoIA">
                    <h1 className='Titulo01IA'>Lensify IA</h1>
                </div>
                <div className='txtPrimeiraSeccaoIA01'>
                    <p className='textoMenorIA1'>Lensify IA é uma Inteligencia Artificial que através de fotos enviadas pelo usuário, identifica o arquétipo do rosto e recomenda as melhores armações de óculos.</p>
                    <a href="#ia"  className='linkIaTelaIa' >Teste já</a>
                </div>
            </div>
        </section>

        <div className='AlinhaTextoNossaEquipe'>
            <h1 className='tituloNossaEquipe tituloIA02'>TESTE A NOSSA IA OU FILTRO</h1>
        </div>

        <section className='ContainerIAeFiltro'>
            <div className="OculosEscolhaIa">
                <img src={ImgOculos} alt="" className='FotoOculosIA'/>
                {<Link to={"/filtro"} className='btnFiltroTelaIa' id='ia'>FILTRO</Link>}
                {<Link to={"/testeIa"} className='btnIaTelaIa'>LENSIFY IA</Link>}
            </div>
        </section>

        <div className='footerALinhadoIaTelaGrande'>
            <FooterPadrao/>
        </div>
        </>
    )
}

export default IA