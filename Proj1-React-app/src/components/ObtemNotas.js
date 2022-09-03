import React from 'react';
import "./ObtemNotas.css";

export default function ObtemNotas(props){
// props.quandoClicar vai informar alguma coisa para o componente pai return(
return(

<div  id = "divDoObtemNotas"> 
<h2>Obtem Notas (filho)</h2>
<button id="btnNotas" onClick={ function (e) { props.quandoClicar('Maria',5);}}>Obter nota</button>
</div>
)};