import React from 'react';
import Card from './components/Card/Card'
import Exemplo01 from './components/Exemplo01';
import NumeroAleatorio from './components/NumeroAleatorio';
import "./App.css";
import PalavraAleatoria from './components/PalavraAleatoria';
import CoresAleatorias from './components/CoresAleatorias';
import VerificaIdade from './components/VerificaIdade';
import ExibeNotas from './components/ExibeNotas';
import ObtemNotas from './components/ObtemNotas';

// Aula sobre Card Grid: https://www.youtube.com/watch?v=0r8UWrQJa-w 
export default function App(props) {
    return (
    <div className="app" >
      <h1 id ="titPagePrinc"> Exemplos com React </h1>
      <div className="cards">
        <div class= "container">
          <div class="row">
            <div class = "col-md-6">
            <Card align-items="left" titulo="Exemplo 01"> <Exemplo01 nome="Lunara" idade="26" ></Exemplo01></Card>
            </div>
          <div class= "col-md-6">
          <Card align-items="center" titulo="Numero Aleatorio"><NumeroAleatorio min={20} max={40}></NumeroAleatorio> </Card>
          </div>
        </div>
      <div class="row">
        <div class ="col-md-6"><Card align-items="right" titulo="Palavra Aleatoria"><PalavraAleatoria min={0} max={5}></PalavraAleatoria></Card></div>
        <div class = "col-md-6"><Card align-items= "center" titulo="Comunicação Direta"><ExibeNotas button="btnNotas"><ObtemNotas nome={"Maria"} nota={5}></ObtemNotas></ExibeNotas></Card></div>
        <div class ="col-md-6"><Card algin-items="right" titulo="Cores Aleatorias"><CoresAleatorias min={0} max={15}></CoresAleatorias></Card></div>
          </div>
           
          
      </div>
                   
      </div>   
       </div> // fim da div App
  );
}




