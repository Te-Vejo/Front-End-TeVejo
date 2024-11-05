import './style.css';
import NavbarPadrao from '../../components/navbar';
import FooterPadrao from '../../components/footer';
import { Link } from 'react-router-dom';
import imgPrimeiroJogo from '../../assets/images/imagensHome/imgPrimeiroJogo.png';
import imgSegundoJogo from '../../assets/images/imagensHome/imgSegundoJogo.png';
import imgTerceiroJogo from '../../assets/images/imagensHome/imgTerceiroJogo.png';

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
                </div>
                <div className='txtSegundaSeccaoHome02'>
                    <p className='textoMenorHome3'>Nossa tecnologia exclusiva <strong>analisa</strong> o formato do rosto da criança e <strong>recomenda</strong> os <strong> óculos</strong> mais adequados, unindo estilo e conforto.</p>
                    {<Link className='linkIaHomeEmDestaque' to={"/ia"}>Testar Agora</Link>}
                </div>
            </div>
        </div>

        <h2  className="SubtituloParaOsJogos">Jogos que ajudam a ir além da diversão</h2>

        <div className="seccaoJogosHome">
            <div className='PrimeiroJogoSeccaoHome'>
                    <img src={imgPrimeiroJogo} alt="Imagem do jogo letras secretas" height={255} />
                    <p className='descricaoPrimeiroJogoHome'>Letras Secretas</p>
            </div>
            <div className='SegundoJogoSeccaoHome'>
                <img src={imgSegundoJogo} alt="Imagem do jogo caça aos detalhes" height={255} />
                <p className='descricaoSegundoJogoHome'>Caça aos Detalhes</p>
            </div>
            <div className='TerceiroJogoSeccaoHome'>
                <img src={imgTerceiroJogo} alt="Imagem do jogo movimentar-se" height={255} />
                <p className='descricaoTerceiroJogoHome'>Movimentar-se</p>
            </div>
        </div>
        <div className='ContainerlinkParaJogo'>
                {<Link className='linkParaOsJogosHome' to={"/jogos"}>PARA JOGAR E CONHECER MAIS jOGOS CLIQUE AQUI!</Link>}
        </div>

        <h2  className="SubtituloParaOsJogos">Olhe e escolha o plano</h2>
        
        <FooterPadrao/>
        </>
    )
}

export default Home