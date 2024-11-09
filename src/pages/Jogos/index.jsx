import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'
import { Link } from 'react-router-dom'

function Jogos(){
    return(
        <>
        <NavbarPadrao />
        <section className='imgPrincipalTelaJogos'>
            {/*A imagem vai como background dessa section*/}
        </section>

        <section className='TxtApresentaçãoJogos'>
            <p>Com diversão e jogos, ajudamos as crianças a enxergarem o mundo com clareza – porque o primeiro passo para um olhar mais nítido começa com a descoberta!</p>
        </section>

        <section className='seccaoPrimeiroJogo'>
            <div className='imgJogo01'></div>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Pequenos exploradores das letras! você está prestes a entrar no mundo cheio de “Letras Secretas". </p>
                    <p className='textDescJogos02'>Um jogo super divertido para ajudar você a reconhecer as letras de forma rápida e emocionante.</p>
                </div>
                {<Link to={"/letrasSecretas"} className='btnsJogos'>Letras Secretas</Link>}
            </div>
        </section>

        <section className='seccaoSegundoJogo'>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Pequenos exploradores das letras! você está prestes a entrar no mundo cheio de “Letras Secretas". </p>
                    <p className='textDescJogos02'>Um jogo super divertido para ajudar você a reconhecer as letras de forma rápida e emocionante.</p>
                </div>
                {<Link to={"/cacaDetalhes"} className='btnsJogos'>Caça aos Detalhes</Link>}
                
            </div>
            <div className='imgJogo02'></div>
        </section>

        <section className='seccaoTerceiroJogo'>
            <div className='imgJogo03'></div>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Pequenos exploradores das letras! você está prestes a entrar no mundo cheio de “Letras Secretas". </p>
                    <p className='textDescJogos02'>Um jogo super divertido para ajudar você a reconhecer as letras de forma rápida e emocionante.</p>
                </div>
                {<Link to={"/movimentar"} className='btnsJogos'>Movimentar-se</Link>}
            </div>
        </section>
        
        <section className='seccaoQuartoJogo'>
            <div className='conteudoJogo01'>
                <div className="descjogo01Jogo">
                    <p className='textDescJogos01'>Pequenos exploradores das letras! você está prestes a entrar no mundo cheio de “Letras Secretas". </p>
                    <p className='textDescJogos02'>Um jogo super divertido para ajudar você a reconhecer as letras de forma rápida e emocionante.</p>
                </div>
                {<Link to={"/letrasSecretas"} className='btnsJogos'>Letras Secretas</Link>}
                
            </div>
            <div className='imgJogo04'></div>
        </section>

        <FooterPadrao/>
        </>
    )
}

export default Jogos