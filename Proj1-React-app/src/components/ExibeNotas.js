import React, { useState} from 'react';
import ObtemNotas from './ObtemNotas';


export default function ExibeNotas(props){
    let situacao = 'sem definição'; 
    const [nom, setNome] = useState("sem valor");
    const [not, setNota] = useState("sem valor"); 

if (!isNaN(not)) {
situacao = not>=5 ? "Aprovado" : "Reprovado"; 
} 
    
function Informacoes(nome,nota) { 
    setNome(nome); setNota(nota); } 
    return(
    <div style={{ backgroundColor: '#E0FFFF', padding: '5px' }}> 
    <h2>Exibe notas (pai)</h2> 
    <ObtemNotas quandoClicar={ Informacoes } ></ObtemNotas>
    <p> Nome: { nom } - Nota: { not } </p>
    <p>Situação: {situacao }</p>
    </div> );
    }