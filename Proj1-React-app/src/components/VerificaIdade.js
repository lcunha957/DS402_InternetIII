// O arquivo: VerificaIdade é filho de Exemplo01
import React from 'react';
export default function VerificaIdade(props){
const situacao = props.idade >=18 ? "Maior de idade":"Menor de idade"; return(
        <div>
            <div style={{ color: "#A020F0"}} >
            <h2>{ props.nome} é { situacao } </h2>
            </div>
   
</div>
);
}
