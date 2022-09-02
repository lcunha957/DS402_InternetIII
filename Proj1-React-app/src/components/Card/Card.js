import React from "react";
import "./Card.css";
import {Card} from "react-bootstrap";
import Exemplo01  from "../Exemplo01";
import NumeroAleatorio from "../NumeroAleatorio";
import PalavraAleatoria from "../PalavraAleatoria";
import CoresAleatorias from "../CoresAleatorias";
 //Exercício 3.2. conforme apostila 2 de react
export default function Cards(props) {
const estilo = {
    backgroundColor: "#5F9EA0",
    borderColor: "#5F9EA0",
    width: "25 rem"
}

const cardInfo = [
    {title:"Exemplo01" , body: Exemplo01},
    {title: "Numero Aleatório", body: NumeroAleatorio },
    {title: "Palavra Aleatória", body: PalavraAleatoria},
    {title: "Cores Aleatorias", body: CoresAleatorias},
]

const renderCard = (card, index) => {
    return(  
    <Card style = {{estilo}} key ={index}>
        <Card.body>
        <Card.title>{card.title}</Card.title>
        <Card.text>{card.text}</Card.text> 
        </Card.body>
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

