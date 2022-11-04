
import React, { useEffect, useState } from "react";

import axios from 'axios';

import Main from "./template/Main";

import "./Carometro.css";

import ImagensGatos from './ImagensGatos';

const title = "Portfólio das turmas";

const urlAPIEstudante="http://localhost:5277/api/CadastroAluno/GetAll";

const urlAPICurso="http://localhost:5277/api/curso";

const urlAPIEstudanteCodCurso = "http://localhost:5277/api/CadastroAluno/CadastroAlunoCodigoCurso"

const img01 = "./img/img01.jpg";

import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

export default function TesteCarometro() {

    const [estudantes, setEstudantes] = useState([]);
    const [APIEstudante, SetAPIEstudante] = useState('');
    const [APIEstudanteCodCurso, SetAPIEstudanteCodCurso] = useState('');
     
    useEffect(() =>{
        axios.get(`http://localhost:5277/api/CadastroAluno/GetAll`).then((response) =>{
            SetAPIEstudante(response.data);
        })
    },[])    

    useEffect(() =>{
        axios.get(`http://localhost:5277/api/CadastroAluno/CadastroAlunoCodigoCurso`).then((response) =>{
            SetAPIEstudanteCodCurso(response.data);
        })
    },[])   

/*componentDidMount() {
    axios(urlAPIAluno).then(resp => {
    this.setState ({ listaDeAluno: resp.data })
    });
}*/

}