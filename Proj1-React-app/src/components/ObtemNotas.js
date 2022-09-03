import React from 'react';
//import  ObtemNotasCss from "src/ObtemNotas.css"; 

export default function ObtemNotas(props){
// props.quandoClicar vai informar alguma coisa para o componente pai return(
<style>
    /* TO DO : fazer style puxando do ObtemNotas.css que não veio*/
     </style>
return(

<div  id = "divDoObtemNotas"> 
<h2>Obtem Notas (filho)</h2>
<button id="btnNotas" onClick={ function (e) { props.quandoClicar('Maria',5);}}>Obter nota</button>
</div>
)};