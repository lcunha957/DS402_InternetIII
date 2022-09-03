import React from "react";
import VerificaIdade from './VerificaIdade';

export default function Exemplo01(props) {
   let idadeIdeal = props.idade >= 18 ? props.idade : 18;
       return(
           <div>
               <h1>Primeiro Componente</h1>
               <p> Nome: <strong>{ props.nome }</strong> </p>
   <p>
   Idade para dirigir: { idadeIdeal } </p>
   <VerificaIdade nome={props.nome} idade={props.idade} /> </div>
   ); }