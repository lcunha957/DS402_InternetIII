import React from 'react';

export default function ObtemNotas(props){
// props.quandoClicar vai informar alguma coisa para o componente pai return(
return(
<div style={{ backgroundColor: '#FAF0E6', padding: '5px' }}> 
<h2>Obtem Notas (filho)</h2>
<button id="btnNotas" style="margin: 20px; border-radius: 10px; background-color:#BD5784; color:#FF9800 " onClick={
    function (e) {
        props.quandoClicar('Maria',5);
    }
}>Obter nota</button>
</div>
)};