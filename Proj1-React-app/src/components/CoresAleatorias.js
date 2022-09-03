import React from "react";

export default function CoresAleatorias(props) {
    // para criar vetor faça let nomedavariavel = [];
    // se fizer: let nomevar2 = { nome: 'Maria', profissão: 'programadora', idade: 23};
    const cores = ["azul", "amarelo", "vermelho", "roxo", "rosa", "vinho", "marrom", "preto", "ciano", "cinza", "verde", "bege", "laranja", "âmbar", "magenta", "verde-oliva"];
    const {min, max} = props;
    
    let IndiceDasCores = Math.floor(Math.random() * (max-min));
    let IndiceCoresInteiro = Math.trunc(IndiceDasCores);

    let estojo = cores.at(IndiceCoresInteiro);
    
    console.log("cor sorteada:" +estojo); 
   return(
       <div>
           <h3> Cor Sorteada:<br/></h3><h5>{estojo}</h5>
       </div>
   ); 
}