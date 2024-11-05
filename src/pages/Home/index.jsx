import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'
import { Link } from 'react-router-dom'


function Home(){
    return(
        <>
        <NavbarPadrao/>

        <div className='primeiraSeccaoHome'>
            <div className="imgPrimeiraSeccaoHome">
                <div className='TxtPrimeiraSeccaoHome'>
                       <h1 className='Titulo01Home'>Olhos saudáveis, infância feliz.</h1>

                       <span className='textoMenorHome'>
                       Cuidando do olhar de
                       quem você ama
                       </span>

                    {<Link to={"/cadastro"} className='linkLoginHome'>Cadastrar-se</Link>}
                </div>
            </div>
        </div>

        <div className='segundaSeccaoHome'>
            <div className="imgsegundaSeccaoHome">
                <div className="txtSegundaSeccaoHome">
                    <h1 className='Titulo02Home'>LensKids</h1>
                    <p className='textoMenor02Home'>Com a nossa inteligência artificial, escolher a armação perfeita para seu filho ficou fácil e divertido!</p>


                    <p className='textoMenorHome3'>Nossa tecnologia exclusiva <strong>analisa </strong>o formato do rosto da criança e <strong>recomenda</strong> os <strong> óculos</strong> mais adequados, unindo estilo e conforto.</p>

                    {<Link className='linkIaHomeEmDestaque' to={"/ia"}>Testar Agora</Link>}
                </div>
            </div>
        </div>

        <h2  className="SubtituloParaOsJogos">Jogos que Ajudam a ir além da diversão</h2>

        <FooterPadrao/>
        </>
    )
}

export default Home