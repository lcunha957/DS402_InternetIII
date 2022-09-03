import React from "react";

export default function Exemplo01(props){
   return (
      <div>
   <h1> Seja bem-vindo(a) ao nosso primeiro componente!</h1><br/><br/>
        <p> Primeiro Nome: <b>{props.PrimeiroNome}</b></p>
        <p> Segundo Nome: <b>{props.SegundoNome}</b></p>
        <p> idade: <b>{props.idade}</b></p>
        <p> Sua média final é: <b>{props.nota}</b></p> 
        <p> Situação: <b>{props.resultado}</b></p>
      </div>
   );  
}