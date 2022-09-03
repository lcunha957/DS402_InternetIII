import React from "react";
import "./Card.css";
import {Card} from "react-bootstrap";
import Exemplo01  from "../Exemplo01";
import NumeroAleatorio from "../NumeroAleatorio";
import PalavraAleatoria from "../PalavraAleatoria";
import CoresAleatorias from "../CoresAleatorias";
 //Exercício 3.2. conforme apostila 2 de react
const Cards = (props) => {
 const PrimeiroNome = Exemplo01.props.PrimeiroNome;
 const SegundoNome = Exemplo01.props.SegundoNome;
 const idadeRaiz = Exemplo01.props.idade;
 const NotaFinal = Exemplo01.props.nota;
 const Resultado = Exemplo01.props.resultado;
 const Numero = NumeroAleatorio.props.num;
 const FrutaQueSorteou = PalavraAleatoria.props.frutaDeFeira; 
 const CorQueSorteou = CoresAleatorias.props.estojo;
 
const cardInfo = [
    // dados do card Exemplo01
    {title:"Exemplo01" , body:<h1>"Seja bem-vindo(a)" ao nosso primeiro componente</h1> + 
   " Primeiro Nome: " + <strong>{PrimeiroNome}</strong> +
   " Segundo Nome: " + <strong>{SegundoNome}</strong> +
   " Idade: " + <strong>{idadeRaiz}</strong> +
   " Sua média final é: "+ <strong>{NotaFinal}</strong> +
   " Situação: " +  <strong>{Resultado}</strong>},
   // dados do card NumeroAleatorio
    {title: "Numero Aleatório", 
    body: <strong>{Numero}</strong>
    },
    // dados do card Palavra Aleatória:
    {title: "Palavra Aleatoria",
     body:<strong>{FrutaQueSorteou}</strong> },
    // dados do card Cores Aleatórias:
    {title: "Cores Aleatorias", 
     body:<strong>{CorQueSorteou}</strong>},
];
const estilo = {
    backgroundColor: "#5F9EA0",
    borderColor: "#5F9EA0",
    width: "25 rem"
};


const renderCard = (card, index) => {
    return(  
    <Card style = {{estilo}} key ={index}>
        <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text> 
        </Card.Body>
         </Card>
         )
  
}

return <div className="App">{cardInfo.map(renderCard)}</div>

/**Exemplo 3.2. da apostila manualmente....
 * return(
  
<div className="card" style={estilo}>
    <div className="titulo"> { props.titulo} </div>
    <div className="conteudo"> { props.children }</div>
</div>
); }
 * 
 */

};

export default Cards; 

