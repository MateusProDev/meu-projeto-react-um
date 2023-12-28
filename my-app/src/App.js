import React from 'react';
import logoJuv from './img/logo-juv.png';
import logo1 from './img/Dog-House.svg';
import logo2 from './img/Event-Accepted-Tentatively.svg';
import logo3 from './img/Pray.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="tela-app">
        <div className="iphone-14-plus-7 screen">
          <div className="flex-row">
            <div className="overlap-group1">
              <img className="fire" src={logoJuv} alt="Fire" />
            </div>
            <div className="min-maranata">Min. MARANATA</div>
            <p id="versao"><em>Versão 2.0</em></p>
          </div>
          <div className="rectangle-34"></div>
          <section className="container_proprietario">
                <p className="no-despreze-a-sua-m cagliostro-normal-black-20px">
                  Não despreze a sua mocidade, <br />
                  mas seja um exemplo para os <br />
                  fiéis na palavra, no procedimento, <br />
                  no amor, na fé e na pureza. <br />
                  1 Timóteo 4:12
                </p>
          </section>
          <div className="overlap-group animate-slide-in">
            <div className="estudos-biblicos cagliostro-normal-black-20px">ESTUDOS BIBLICOS</div>
            <div className="overlap-group3">
              <div className="acessar">ACESSAR</div>
            </div>
          </div>
          <div className="overlap-group2 animate-slide-in">
            <a href="./calendar.js"><img className="clipboard-list" src={logo2} alt=" List" /></a>
            <a href="index.html"><img className="dog-house" src={logo1} alt="house" /></a>
            <a href="sala.html"><img className="pray" src={logo3} alt="Pray" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
