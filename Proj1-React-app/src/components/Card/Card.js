import React from "react";
import "./Card.css";
import {Card} from "react-bootstrap";
import Exemplo01  from "../Exemplo01";
import NumeroAleatorio from "../NumeroAleatorio";
import PalavraAleatoria from "../PalavraAleatoria";
import CoresAleatorias from "../CoresAleatorias";
 //Exercício 3.2. conforme apostila 2 de react
const Cards = (props) => {

const cardInfo = [
    {title:"Exemplo01" , body: Exemplo01},
    {title: "Numero Aleatório", body: NumeroAleatorio },
    {title: "Palavra Aleatória", body: PalavraAleatoria},
    {title: "Cores Aleatorias", body: CoresAleatorias},
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

