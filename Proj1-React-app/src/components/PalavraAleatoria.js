import React from "react";

export default function PalavraAleatoria(props) {
    // para criar vetor faça let nomedavariavel = [];
    // se fizer: let nomevar2 = { nome: 'Maria', profissão: 'programadora', idade: 23};
    const palavras = ["abacaxi", "uva", "tamarindo", "pera", "morango", "figo"];
    const {min, max} = props;
       /* retorna indice -1
    let IndiceDaPalavra = limites => Math.floor(Math.random() * (max-min) + min);
    */ 
     let IndiceDaPalavra = (Math.random()*(max - min));
    let IndiceInteiro = Math.trunc(IndiceDaPalavra);

    let frutaDeFeira = palavras.at(IndiceInteiro);
    //let frutas = palavras.indexOf(IndiceInteiro);
    
    console.log("indice sorteado:" +IndiceDaPalavra);
    console.log("Indice inteiro:" +IndiceInteiro);
    console.log("fruta sorteada:" +frutaDeFeira); 
   
  return(
      <div>
          <h1> Fruta sorteada:<br/></h1><h5>{frutaDeFeira}</h5>
      </div>
  )
}