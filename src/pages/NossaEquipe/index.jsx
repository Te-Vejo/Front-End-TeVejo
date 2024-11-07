import './style.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../../assets/images/logo/logo.svg'
import { Link } from 'react-router-dom';
import CardEquipe from '../../components/CardEquipe/CardEquipe';


function NossaEquipe(){
    return(
        <>
        <nav className='topo'>

        <img src={imgLogo} width={90} height={90} alt="logo da TeVejo" />

          <h1 className='TituloSobreEquipe'>Conheça nossa Equipe</h1>

          <p className='txtInvisel'></p>
        </nav>

        <div className='conteudoNossaEquipe'>

          <div className='linhaCard'>
            {/* <div className="cardsPerfil"></div>
            <div className="cardsPerfil"></div>
            <div className="cardsPerfil"></div>
            <div className="cardsPerfil"></div> */}

            {<CardEquipe className = "cardsPerfil"/>}
            {<CardEquipe className = "cardsPerfil"/>}
            {<CardEquipe className = "cardsPerfil"/>}
            {<CardEquipe className = "cardsPerfil"/>}
            
          </div>

          <div className='linhaCard'>
            {/* <div className="cardsPerfil"></div>
            <div className="cardsPerfil"></div>
            <div className="cardsPerfil"></div>
            <div className="cardsPerfil"></div> */}

            {<CardEquipe className = "cardsPerfil"/>}
            {<CardEquipe className = "cardsPerfil"/>}
            {<CardEquipe className = "cardsPerfil"/>}
            {<CardEquipe className = "cardsPerfil"/>}
            
          </div>


        </div>
        </>
    )
}


export default NossaEquipe;