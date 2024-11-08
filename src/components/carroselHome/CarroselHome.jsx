import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/images/imagensHome/meninaLendoLivro.png'
import './style.css'
import { Link } from 'react-router-dom';


function CarroselHome() {
  return (
      <Carousel interval={2000}>
        <Carousel.Item>
          <img src={img} alt="imagem de criança lendo com os dizeres Olhos saudáveis, infância feliz cuide do olhar de quem vc
          ama" />
          <Carousel.Caption className='txtPrimeiroSlide'>
          <h3>Venha Conhecer o TeVejo</h3>
          <p>Aqui cuidamos da sáude visual do seu pequeno!</p>
          {<Link to={"/cadastro"} className='btnCarrosel01'>Cadastrar-se</Link>}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img} alt="" />
          <Carousel.Caption>
            <h3>Venha Conhecer o TeVejo</h3>
            <p>Aqui cuidamos da sáude visual do seu pequeno</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default CarroselHome;