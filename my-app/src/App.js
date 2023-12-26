import React from 'react';
import logoJuv from './img/logo-juv.png'; // Importe a imagem da logo
import './App.css';
import { Carousel } from 'react-bootstrap'; // Corrija a importação

function App() {
  return (
    <div className="App">
      <div className="tela-app">
        <div className="iphone-14-plus-7 screen">
          <div className="flex-row">
          <div class="overlap-group1">
            <img class="fire" src={logoJuv} alt="Fire" />
          </div>
            <div className="min-maranata">Min. MARANATA</div>
            <p id="versao"><em>Versão 2.0</em></p>
          </div>
          <div className="rectangle-34"></div>
          <section className="container_proprietario">
          <Carousel>
          <Carousel.Item>
            <p className="no-despreze-a-sua-m cagliostro-normal-black-20px">
              Não despreze a sua mocidade, <br />
              mas seja um exemplo para os <br />
              fiéis na palavra, no procedimento, <br />
              no amor, na fé e na pureza. <br />
              1 Timóteo 4:12
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="no-despreze-a-sua-m cagliostro-normal-black-20px">
              Ninguém o despreze pelo fato de você ser jovem, <br />
              mas seja um exemplo para os fiéis na palavra, <br />
              no procedimento, no amor, na fé e na pureza. <br />
              1 Timóteo 4:12 (NVI)
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="no-despreze-a-sua-m cagliostro-normal-black-20px">
              Pois eu bem sei os planos que estou <br />
              projetando para vós, diz o SENHOR; <br />
              planos de paz e não de mal, <br />
              para vos dar um futuro e uma esperança. <br />
              Jeremias 29:11 (NVI)
            </p>
          </Carousel.Item>
        </Carousel>
          </section>
          <div className="overlap-group animate-slide-in">
            <div className="estudos-biblicos cagliostro-normal-black-20px">ESTUDOS BIBLICOS</div>
            <div className="overlap-group3">
              <div className="acessar">ACESSAR</div>
            </div>
          </div>
          <div className="overlap-group2 animate-slide-in">
            <a href="calendario.html"><img className="clipboard-list" src="img/Event Accepted Tentatively.svg" alt="Clipboard List" /></a>
            <a href="index.html"><img className="dog-house" src="img/Dog House.svg" alt="Dog House" /></a>
            <a href="sala.html"><img className="pray" src="img/Pray.svg" alt="Pray" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
