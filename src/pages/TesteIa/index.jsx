import React, { useState } from 'react';
import './style.css';
import NavbarPadrao from '../../components/navbar';


const AnalisadorFacial = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [resultado, setResultado] = useState(null);

  const apiKey = 'AIzaSyCIebqx1zhXllU9YGVSQoLKEZmbrb6XRok';

  const analisarImagem = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImagemSelecionada(reader.result);
    };
    reader.readAsDataURL(file);

    setLoading(true);
    setErro(null);
    setResultado(null);

    try {
      const base64Image = await converterParaBase64(file);
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `Você é uma funcionalidade em um site e deve, analisar se há um rosto na imagem, caso haja, verifique o formato do rosto e categorize eles entre (Redondo, Quadrado, Oval e Coração), leve em consideração a largura da testa, formato do queixo e tamanho do nariz. Agora retorne um desses tipos de armação (quadrado, redondo, gatinho e aviador) que combine com tal rosto analisado em formato JSON se não ouver retorne um texto escrevendo um erro: 
                {
                  "MelhorArmacao": "<tipo de armação recomendada>"
                }`
              },
              {
                inline_data: {
                  mime_type: file.type,
                  data: base64Image
                }
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 4096
        }
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
        }
      );

      if (!response.ok) {
        throw new Error('Falha ao analisar a imagem');
      }

      const data = await response.json();
      let DataErrado = data.candidates[0].content.parts[0].text;

      if (DataErrado.includes("json")) {
        DataErrado = DataErrado.slice(8, 38);
        const result = JSON.parse(DataErrado);
        exibirResultados(result);
      } else {
        const result = JSON.parse(data.candidates[0].content.parts[0].text);
        exibirResultados(result);
      }

    } catch (error) {
      setErro('Erro ao analisar a imagem! Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const converterParaBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const exibirResultados = (result) => {
    setResultado(result);
  };

  return (
    <>

    <NavbarPadrao/>

    <div className="container">
      <h1>Análise Facial</h1>
      <div className="file-input-wrapper">
        <button className="btn">Escolher Imagem</button>
        <input
          type="file"
          id="inputImagem"
          accept="image/*"
          onChange={analisarImagem}
        />
        
      </div>
      <div id="imagem-preview" className="imagem-preview">
        {imagemSelecionada && (
          <img
            id="imagemSelecionada"
            alt="Imagem selecionada"
            style={{ maxWidth: '100%', height: 'auto' }}
            src={imagemSelecionada}
          />
        )}
      </div>
      {loading && <div id="loading" className="loading">Analisando imagem...</div>}
      {erro && <div id="error" className="error">{erro}</div>}
      {resultado && (
        <div id="resultado">
          <h2>Resultados da Análise:</h2>
          <p><strong>Melhor Armação:</strong> <span id="melhorArmacao">{resultado.MelhorArmacao}</span></p>
        </div>
      )}
    </div>



    </>
  );
};

export default AnalisadorFacial;
