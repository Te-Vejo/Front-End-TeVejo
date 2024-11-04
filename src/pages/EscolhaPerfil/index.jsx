import React, { useState } from 'react';
import './style.css';
import foto1 from './IMG/foto1.png';
import foto2 from './IMG/foto2.png';
import foto3 from './IMG/foto3.png';



function EscolhaPerfil() {
    const [corSelecionada, setCorSelecionada] = useState(null);

    const handleSelectCircle = (cor) => {
        setCorSelecionada(cor);
    };

    return (

        
        <div className="App">

            <h1>Escolha o perfil</h1>

            <div className="circulos">
                <div
                    className={`circulo azul ${corSelecionada === 'azul' ? 'ativo' : ''}`}
                    onClick={() => handleSelectCircle('azul')}
                >
                    {corSelecionada === 'azul' && (
                        <div className="blur"></div>
                    )}
                    <img src={foto1} alt="Perfil" className="imagem" />
                </div>

                <div
                    className={`circulo rosa ${corSelecionada === 'rosa' ? 'ativo' : ''}`}
                    onClick={() => handleSelectCircle('rosa')}
                >
                    {corSelecionada === 'rosa' && (
                        <div className="blur"></div>
                    )}
                    <img src={foto2} alt="Perfil" className="imagem" />
                </div>

                <div
                    className={`circulo amarelo ${corSelecionada === 'amarelo' ? 'ativo' : ''}`}
                    onClick={() => handleSelectCircle('amarelo')}
                >
                    {corSelecionada === 'amarelo' && (
                        <div className="blur"></div>
                    )}
                    <img src={foto3} alt="Perfil" className="imagem" />
                </div>

            </div>

            <button className={`botao-confirmar ${corSelecionada}`} disabled={!corSelecionada}>
                Confirmar
            </button>

        </div>
    );
}

export default EscolhaPerfil;