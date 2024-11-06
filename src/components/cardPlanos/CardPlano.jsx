import React from 'react';
import './style.css'

const CardPlano = (props) => {
  return (
      <div className="book" style={{backgroundColor:props.CorfundoCartao02}}>
        <p className='ConteudoPlano'>{props.conteudo}</p>
        <div className="cover" style={{background:props.CorfundoCartao}}>
         <h3 className='TituloPlano'>{props.ValorPlano} 

         <p className='TipoPlano'>{props.TipoPlano}</p>
         </h3>

         <p className='PasseMouse'>Passe o mouse por cima!</p>
         

        </div>
      </div>
  );
}

export default CardPlano;
