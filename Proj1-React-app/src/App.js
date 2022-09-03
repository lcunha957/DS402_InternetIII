import React from 'react';
import Card from './components/Card/Card'
import Exemplo01 from './components/Exemplo01';
import NumeroAleatorio from './components/NumeroAleatorio';
import "./App.css";
import PalavraAleatoria from './components/PalavraAleatoria';
import CoresAleatorias from './components/CoresAleatorias';


// Aula sobre Card Grid: https://www.youtube.com/watch?v=0r8UWrQJa-w 
export default function App(props) {
    return (
    <div className="app" >
      <h1>Exemplos com React </h1>
      <div className="cards">
        <div class= "container">
          <div class="row">
            <div class = "col-lg-10">
            <Card align-items="left" titulo="Exemplo01"> <Exemplo01 PrimeiroNome="Lunara" SegundoNome="Cunha" idade="26" nota ="9,0" resultado= "Aprovado"></Exemplo01></Card>
            </div>
          <div class= "col-lg-10">
          <Card align-items="center"titulo="NumeroAleatorio"><NumeroAleatorio min={20} max={40}></NumeroAleatorio> </Card>
          </div>
        </div>
      <div class="row">
        <div class ="col-md-10"><Card titulo="PalavraAleatoria"><PalavraAleatoria min={0} max={5}></PalavraAleatoria></Card></div>
        <div class ="col-md-10"><Card titulo="CoresAleatorias"><CoresAleatorias min={0} max={15}></CoresAleatorias></Card></div>
           
      </div>
      </div>
                   
      </div>   
       </div> // fim da div App
  );
}




