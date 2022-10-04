import React, { Component } from "react";

import axios from 'axios';

import Main from "./template/Main";

import '../components/ImagensDosAlunos.css';

const imagens=[
    {id:"1", url:"https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg"},
    {id:"2", url:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534493_960_720.jpg"},
    {id:"3", url:"https://cdn.pixabay.com/photo/2019/04/28/18/34/orange-4163953_960_720.jpg"},
    {id:"4", url:"https://cdn.pixabay.com/photo/2015/11/25/09/52/star-anise-1061572_960_720.jpg"},
    {id:"5", url:"https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg"},
    {id:"6", url:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg"},
    {id:"7", url:"https://cdn.pixabay.com/photo/2015/07/10/18/36/still-life-840014_960_720.jpg"},
    {id:"8", url:"https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg"},
  
];





export default class ImagePerfil extends Component {
    state = { ...imagens }

    componentDidMount() {
        axios(imagens.url).then(resp => {
        this.setState ({ lista: resp.data })
        });
    }
        render()
         {
        return (
            <div>
            {this.state.imagens.map(
                (f, i) =>
                <img  id = {f.id} src={f.url} className="arara" alt=""/>
            )}
          </div>
        )
    }



}
