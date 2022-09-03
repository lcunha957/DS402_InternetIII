import React from "react";
import "./Card.css";


 //Exercício 3.2. conforme apostila 2 de react
 export default function Card(props) {
    const estilo = {
        backgroundColor: "#5F9EA0",
        borderColor: "#5F9EA0",
        width: "45 rem"
    }
  
    return(
        <div className="card" style ={estilo}>
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>
        </div>
    ) 
 }



