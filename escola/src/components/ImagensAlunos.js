import React, { Component } from 'react';

import axios from 'axios';


const apiUrlDeGatinhos = "https://api.thecatapi.com/v1/images/search"

const initialState = {
    figuras: { id: "", url: '', width: 0, height: 0 },
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
                <img style={{width:'200px', height:'140px', borderRadius:'20px'}} src={f.url}/>
            )}
          </div>
        )
    }
}