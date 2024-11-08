import './style.css';
import CardEquipe from '../../components/CardEquipe/CardEquipe';
import NavbarPadrao from '../../components/navbar';
import FooterPadrao from '../../components/footer';


function NossaEquipe(){
    return(
        <>

          <NavbarPadrao/>

          <div className='linhaCard'>

            {<CardEquipe className = "cardsPerfil" nome={"Gustavo"} funcao={"Product Owner"}/>}
            {<CardEquipe className = "cardsPerfil" nome={"Gabriel"} funcao={"Scrum Master"}/>}
            {<CardEquipe className = "cardsPerfil" nome={"Pedro"}/>}
            {<CardEquipe className = "cardsPerfil" nome={"Lívea"}/>}
            
          </div>

          <div className='linhaCard'>

            {<CardEquipe className = "cardsPerfil" nome={"Caio"}/>}
            {<CardEquipe className = "cardsPerfil" nome={"Melissa"}/>}
            {<CardEquipe className = "cardsPerfil" nome={"Davi"}/>}
            {<CardEquipe className = "cardsPerfil" nome={"Sônia"}/>}
            
          </div>

          <FooterPadrao/>
        </>
    )
}


export default NossaEquipe;