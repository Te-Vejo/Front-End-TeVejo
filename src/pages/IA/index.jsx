import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'

function IA(){
    return(
        <>
        <NavbarPadrao/>
        
        <section className='imgPrincipalTelaIa'>
            {/*A imagem vai como background dessa section*/}
        </section>

        <div className='AlinhaTextoNossaEquipe'>
            <h1 className='tituloNossaEquipe'>TESTE O NOSSO FILTRO OU IA</h1>
        </div>

        <section className="seccaoOculosIA">
            <div className="lenteEsquerda">
                
            </div>
        </section>


        <FooterPadrao/>
        </>
    )
}

export default IA