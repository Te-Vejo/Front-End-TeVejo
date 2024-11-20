import "./style.css";
import logoInstagram from "../../assets/images/iconesRedesSociais/instagram.svg";
import logoFacebook from "../../assets/images/iconesRedesSociais/facebook.svg";
import logoLinkedin from "../../assets/images/iconesRedesSociais/linkedin.svg";
import FooterPadrao from "../../components/footer";
import imgBolinha from "../../assets/images/imagemPagParceiros/bolinhasVermelhas.png";

function Parceiros() {
  return (
    <>
      <h1 className="tituloParceiros">Parcerias Te Vejo</h1>

      <section className="seccaoParceiro01">
        <div className="logoParceiro01"></div>

        <div className="conteudoParceiro01">
          Naveguard é um projeto social desenvolvido por jovens estudantes do
          Instituto Proa, formados pelo desafio DemoDay de Recife - PE.
          Consistem em...
        </div>

        <div className="redesSociasParceiro">
          <a href="#">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src={logoFacebook}
              alt="logo Facebook"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src={logoLinkedin}
              alt="logo Linkedin"
              width="30"
              height="30"
            />
          </a>
        </div>
      </section>

      <section className="seccaoParceiro02">
        <div className="logoParceiro02"></div>

        <div className="conteudoParceiro02">
        Óticas Kenzo hoje é uma das marcas mais desejadas. Contribuiram com o projeto “Te Vejo” disponibilizando seu catálogo de armações para uso exclusivo em nossa Lensify, gerando resultados inéditos que agradam cada vez mais nossos usuários.

        <div className="redesSociasParceiro">
          <a href="#">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src={logoFacebook}
              alt="logo Facebook"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src={logoLinkedin}
              alt="logo Linkedin"
              width="30"
              height="30"
            />
          </a>
        </div>
        </div>

       
      </section>


      <section className="seccaoParceiro03">
        <div className="logoParceiro03"></div>

        <div className="conteudoParceiro03">
        <p className="paragrafoParceiro">Óticas Kenzo hoje é uma das marcas mais desejadas. Contribuiram com o projeto “Te Vejo” disponibilizando seu catálogo de armações para uso exclusivo em nossa Lensify, gerando resultados inéditos que agradam cada vez mais nossos usuários.</p>
        </div>

        <div className="redesSociasParceiro">
          <a href="#">
            <img
              src={logoInstagram}
              alt="logo Instagram"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src={logoFacebook}
              alt="logo Facebook"
              width="30"
              height="30"
            />
          </a>
          <a href="#">
            <img
              src={logoLinkedin}
              alt="logo Linkedin"
              width="30"
              height="30"
            />
          </a>
        </div>
      </section>


      <FooterPadrao/>

      
    </>
  );
}

export default Parceiros;
