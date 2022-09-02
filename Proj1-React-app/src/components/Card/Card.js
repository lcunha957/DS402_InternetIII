import React from "react";
import "./Card.css";
import {Card} from "react-bootstrap";

/* Exercício 3.2. conforme apostila 2 de react
export default function Card(props) {
const estilo = {
    backgroundColor: "#5F9EA0",
    borderColor: "#5F9EA0"
}
return(
  
<div className="card" style={estilo}>
    <div className="titulo"> { props.titulo} </div>
    <div className="conteudo"> { props.children }</div>
</div>
); }*/

const Card = () =>{

    const cardInfo = [
        {image: "https://r8p9h9p8.rocketcdn.me/wp-content/uploads/2022/07/lebron-james-comprar-time-nba.jpg", title: "Lebron James", text: "HE GOAT"},
        {image: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0721%2Fr1038928_1296x729_16%2D9.jpg&w=570&format=jpg", title: "James Harden", text: "he good"},
        {image: "https://s2.glbimg.com/Bv-snrywPGX6s7s-b0E7Pj6GPno=/0x0:3182x2229/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/9/R/RUBz5YQPSbMycqMz0zNw/gettyimages-1397138444.jpg", title: "Steph Curry", text: "he good"},
        {image: "https://r8p9h9p8.rocketcdn.me/wp-content/uploads/2022/08/Michael-Jordan.jpg", title: "Michael Jordan", text: "he is very close to goat"},
    ]; 

     const renderCard = (card, index) => {
         return (
            <Card style = {{ width: "18 rem" }} key ={index}>
             <Card.Img variant = "top" src="holder.js/100px180" src="{card.imahe}" ></Card.Img>   
            <Card.Body>
            <Card.title>{card.title}</Card.title>
            <Card.Text> {card.text}</Card.Text>
            </Card.Body>
            </Card>
         )
     }

    return <div className="App">{cardInfo.map(renderCard)}</div>
};

export default Card; 