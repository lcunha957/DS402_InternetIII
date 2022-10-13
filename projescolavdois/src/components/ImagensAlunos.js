import React, { Component } from 'react';

import axios from 'axios';

import img01 from '../public/img/img01';
import img02 from '../public/img/img02';
import img03 from '../public/img/img03';
import img04 from '../public/img/img04';
import img05 from '../public/img/img05';
import img06 from '../public/img/img06';
import img07 from '../public/img/img07';
import img08 from '../public/img/img08';

const apiUrlDeGatinhos = "C:\\Users\\Marisa Cunha\\Documents\\GitHub\\projeto_react_Escola\\DS402_InternetIII\\projescolavdois\\public\\img";

const initialState = {
    figuras: {id:1, foto:img01}, {id:2, foto:img02}, {id:3, foto:img03}, {id:4, foto:img04}, {id:5, foto:img05}, {id:6,foto:img06}, {id:7,foto:img07}, {id:8, foto:img08},
    listaDeFiguras:[]
}

export default class ImagensAlunos extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(apiUrlDeGatinhos).then(resp => {
            this.setState({ listaDeFiguras: resp.data })
            
        })
    }

    render() {
        return (
            <div>
            {this.state.listaDeFiguras.map(
               (f) =>
                <img style={{width:'200px', height:'140px', borderRadius:'20px'}} src={figuras.id} alt="imagem01"/>
            )}
          </div>
        )


    }
}