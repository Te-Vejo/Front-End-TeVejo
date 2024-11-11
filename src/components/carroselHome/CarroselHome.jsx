import Carousel from 'react-bootstrap/Carousel';
import imgSlide01 from '../../assets/images/imagensHome/meninaLendoLivro.png'
import imgSlide02 from '../../assets/images/imagensHome/SegundoSlide.png'
import imgSlide03 from '../../assets/images/imagensHome/TerceiroSlide.png'
import './style.css'
import { Link } from 'react-router-dom';


function CarroselHome() {
  return (
      <Carousel interval={3000}>
        <Carousel.Item>
          <img src={imgSlide01} alt="imagem de criança lendo com os dizeres Olhos saudáveis, infância feliz cuide do olhar de quem vc
          ama" />
          <Carousel.Caption className='txtPrimeiroSlide'>
          <h3>Venha Conhecer o TeVejo</h3>
          <p>Aqui cuidamos da sáude visual do seu pequeno!</p>
          {<Link to={"/cadastro"} className='btnCarrosel01'>Cadastre-se</Link>}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgSlide02} alt="Foto de garoto lendo" />
          <Carousel.Caption className='txtSegundoSlide'>
            <h3>Venha Conhecer o TeVejo</h3>
            <p>Aqui cuidamos da sáude visual do seu pequeno</p>
            {<Link to={"/cadastro"} className='btnCarrosel02'>Cadastre-se</Link>}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={imgSlide03} alt="Menina testando óculos azul" />
          <Carousel.Caption className='txtTerceiroSlide'>
            <h3>Venha Conhecer o TeVejo</h3>
            <p>Aqui cuidamos da sáude visual do seu pequeno</p>
            {<Link to={"/cadastro"} className='btnCarrosel03'>Cadastre-se</Link>}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default CarroselHome;