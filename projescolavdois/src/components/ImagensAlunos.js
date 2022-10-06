import React, { Component } from 'react';

import axios from 'axios';


const apiUrlDeGatinhos = "https://localhost:5277/api/CadastroAluno/GetAll";

const initialState = {
    figuras: { id: " ", ra: " ", nomeAluno:" ", al_codCurso:" ", imagem: " " },
    listaDeFiguras: []
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
                <img style={{width:'200px', height:'140px', borderRadius:'20px'}} src={f.imagem}/>
            )}
          </div>
        )
    }
}