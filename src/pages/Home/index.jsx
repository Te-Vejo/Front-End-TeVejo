import './style.css';
import NavbarPadrao from '../../components/navbar';
import FooterPadrao from '../../components/footer';
import CardJogo from '../../components/cardJogos/CardJogo';
import CardPlano from '../../components/cardPlanos/CardPlano';
import { Link } from 'react-router-dom';
import imgPrimeiroJogo from '../../assets/images/imagensHome/ImgJogo01.png';
import imgSegundoJogo from '../../assets/images/imagensHome/ImgJogo02.png';
import imgTerceiroJogo from '../../assets/images/imagensHome/ImgJogo03.jpg';



function Home(){
    return(
        <>
        <NavbarPadrao/>

        <section className='primeiraSeccaoHome'>
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
        </section>

        <section className='segundaSeccaoHome'>
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
        </section>

        <h2  className="SubtituloParaOsJogos">Jogos que ajudam a ir além da diversão</h2>
        
        <p className='txthomeJogo'>Passe o mouse por cima para saber mais!</p>

        <section className="seccaoJogosHome">
            <div className='PrimeiroJogoSeccaoHome'>
                    {<CardJogo img = {imgPrimeiroJogo} desc = {"Olá, detetive! Prepare-se para o Jogo de Distinção de Detalhes, onde sua missão é encontrar objetos e detalhes escondidos em imagens coloridas!"} corFundo ={"#360568"}/>}
                    <p className='descricaoPrimeiroJogoHome'>Letras Secretas</p>
            </div>
            <div className='SegundoJogoSeccaoHome'>
                {<CardJogo img = {imgSegundoJogo} desc = {"Pequenos exploradores das letras! Um jogo super divertido para ajudar você a reconhecer as letras de forma rápida e emocionante."} corFundo = {"#5E6406"}/>}
                <p className='descricaoSegundoJogoHome'>Caça aos Detalhes</p>
            </div>
            <div className='TerceiroJogoSeccaoHome'>
                {<CardJogo img = {imgTerceiroJogo} desc = {"Prepare-se para o Jogo de Seguir o Movimento! Aqui, você vai se divertir seguindo uma figura que se move na tela."} corFundo = {"#C71874"}/>}
                <p className='descricaoTerceiroJogoHome'>Movimentar-se</p>
            </div>
        </section>
        <section className='ContainerlinkParaJogo'>
                {<Link className='linkParaOsJogosHome' to={"/jogos"}>PARA CONHECER MAIS JOGOS CLIQUE AQUI!</Link>}
        </section>

        <h2 className="SubtituloParaOsJogos">Olhe e escolha o plano</h2>

        <section className='QuartaSeccaoHome'> 
            <CardPlano ValorPlano={"R$ 00,00/Mês"} TipoPlano={"Grátis"}/>
            <CardPlano/>
        </section>
        
        <FooterPadrao/>
        </>
    )
}

export default Home