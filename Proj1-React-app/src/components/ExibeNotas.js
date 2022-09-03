import React from 'react';
import ObtemNotas from './ObtemNotas';

export default function ExibeNotas(props){
function Informacoes(nome,nota) { console.log(nome, nota);
}
return(
<div style={{ backgroundColor: '#E0FFFF', padding: '5px' }}>
<h2>Exibe notas (pai)</h2>
<ObtemNotas quandoClicar={ Informacoes } ></ObtemNotas>
</div>
); }