import React, { Component } from 'react';

import axios from 'axios';

const img01 = '../public/img/img01.jpg';
const img02 = '../public/img/img02.jpg';
const img03 = '../public/img/img03.jpg';
const img04 = '../public/img/img04.jpg';
const img05 = '../public/img/img05.jpg';
const img06 = '../public/img/img06.jpg';
const img07 = '../public/img/img07.jpg';
const img08 = '../public/img/img08.jpg';


const apiUrlDeGatinhos = "C:\\Users\\Marisa Cunha\\Documents\\GitHub\\projeto_react_Escola\\DS402_InternetIII\\projescolavdois\\public\\img";

const gatinhos = [
    {id:1, foto:img01}, 
    {id:2, foto:img02}, 
    {id:3, foto:img03},
    {id:4, foto:img04},
    {id:5, foto:img05}, 
    {id:6,foto:img06},
    {id:7,foto:img07}, 
    {id:8, foto:img08}
]   


const listaDeFiguras= [];

export default class ImagensAlunos extends Component {
    state = { ...gatinhos }

    componentDidMount() {
        axios(apiUrlDeGatinhos).then(resp => {
            this.setState({ listaDeFiguras: resp.data })
            
        })
    }

    render() {
        return (
            <div>
            {this.state.gatinhos.map(
               (f) =>
                <img style={{width:'200px', height:'140px', borderRadius:'20px'}} src={f.id} alt="imagem01"/>
            )}
          </div>
        )


    }
}