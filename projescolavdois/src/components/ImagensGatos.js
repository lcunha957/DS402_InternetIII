import React, { Component } from 'react';

import img01 from "./img/img01.jpg";

import img02 from "./img/img02.jpg";

import img03 from "./img/img03.jpg";

import img04 from "./img/img04.jpg";

import img05 from "./img/img05.jpg";

import img06 from "./img/img06.jpg";

import img07 from "./img/img07.jpg";

import img08 from "./img/img08.gif";

import img09 from "./img/img09.jpg";


 const listaGatos = [
 <img src={img01} id="1" style={{ width:'230px', height:'100px'}}/>,<img src={img02} id="2" style={{ width:'230px', height:'100px'}}/>, 
 <img src={img03} id="3" style={{ width:'230px', height:'100px'}}/>,<img src={img04} id="4" style={{ width:'230px', height:'100px'}}/>,
 <img src={img05} id="5" style={{ width:'230px', height:'100px'}}/>,<img src={img06} id="6" style={{ width:'230px', height:'100px'}}/>,
 <img src={img07} id="7" style={{ width:'230px', height:'100px'}}/>,<img src={img08} id="8" style={{ width:'230px', height:'100px'}}/>,
<img src={img09} id="9" style={{ width:'230px', height:'100px'}}/>]

export default class ImagensGatos extends Component {
   

    render() {
        const pegarImagem = (key) =>{
            return listaGatos[key]
        }
       
        return (
           pegarImagem(this.props.date)
           
        )
}

}