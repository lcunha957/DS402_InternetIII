import React from "react";

export default function NumeroAleatorio(props) {
    const {min, max} = props;
    let num = Math.floor(Math.random() * (max-min)) + min;
    console.log("num=" + num);
   return(
       <div>
           <h3> Numero Aleatório:<br/></h3><h5>{num}</h5>
       </div>
   ); 
}