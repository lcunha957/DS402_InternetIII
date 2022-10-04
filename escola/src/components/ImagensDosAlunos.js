import React, { Component } from "react";

import axios from 'axios';

import Main from "./template/Main";

const FonteAPIdeImagens = "https://pixabay.com/photos/search/";

const ListaDeImagens = {
    imagem: { id: "", url: "", width: 250, height: 100 },
    listadefiguras: []
}

export default class ImagePerfil extends Component {
    state = { ...ListaDeImagens }

    componentDidMount() {
        axios(FonteAPIdeImagens).then(resp => {
            this.setState({ listadefiguras: resp.data })
            
        })
    }

    render() {
        return (
            <div>
            {this.state.listadefiguras.map(
                (d) =>
                <imagem id={ListaDeImagens.imagem.id}
             src={d.url}/>
            )}
          </div>
        )
    }
}



