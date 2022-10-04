import React, { Component } from "react";

import axios from 'axios';

import Main from "./template/Main";

import "./Carometro.css";


import { redirect } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import ImagensAlunos from "./ImagensDosAlunos";

const title = "Portfólio das turmas";


const urlAPIGatinhos=  "https://api.thecatapi.com/v1/images/search?limit=10";
const urlAPIEstudante="http://localhost:5277/api/cadastroaluno";
const urlAPICurso="http://localhost:5277/api/curso";

const initialState= { 
    estudantes:{ id: 0,  ra:"", nomeAluno:"", al_codCurso:""},
    listaDeEstudante:[],
     };

     const Curso = {
        cursos:{id: 0, codCurso:"", nomeCurso:"", periodo: ""},
        listaDeCurso:[],
        };
        
        const estadoZero = {
            imagens: {id:"", url:""},
            listaImg:[],
        };
           

          
           
export default class Carometro extends Component{
    state={ ...initialState, ...Curso, ...estadoZero }

    
componentDidMount() {
    axios(urlAPIEstudante).then(resp => {
    this.setState ({ listaDeEstudante: resp.data })
    });
    
    axios(urlAPICurso).then(resp =>{
    this.setState({listaDeCurso: resp.data})   
    })

    axios(urlAPIGatinhos).then(resp =>{
        this.setState({listaImg: resp.data})   
        })
    }

    handleCodCursoChange = (event) => {
        const estudantes = { ...this.state.estudantes };
        estudantes.al_codCurso = Number(event.target.value);
        this.setState({ estudantes })

        if((this.state.listaDeCurso.cursos.codCurso) > 0){
          return Card;  
        }

        else {
         return redirect(urlAPICurso);   
        }
        }


       
            
        

    renderTable(){
        return(
            <div class="container" className= "leao">
            
        <th>
            <tr>
            <select className="seletorCurso" name="infoCurso"
            onChange={event => this.handleCodCursoChange(event)} >
                <option value={"selecionar"}> Selecione um curso </option>
            {this.state.listaDeCurso.map((cursos) => (
             <option key={cursos.id}  name="codigoCurso" value={cursos.codCurso}>
         {cursos.codCurso} - {cursos.nomeCurso} </option>))}
             </select>
            </tr>
            </th>
          
          <th>
           <div class= "Row">
            <div class="col-md-2">
            {this.state.listaDeEstudante.map((estudantes) => 
            <Card key={estudantes.id} className="pantera">
                {this.state.listaImg.map((imagens) =>
                <Card.Img className="uirapuru" key={imagens.id} src={imagens.url}></Card.Img>
                )}
                <Card.Body className="lontra">
                <Card.Title className="chafariz"> RA: {estudantes.ra} </Card.Title>
                <Card.Subtitle className="ornitorrinco"> Nome do Aluno: {estudantes.nomeAluno}</Card.Subtitle>
                <Card.Text className="zebra"> Código do Curso: {estudantes.al_codCurso}</Card.Text>
                <Card.Text className="albatroz"> Matriculado(a) em: {Curso.cursos.nomeCurso(estudantes.al_codCurso)} </Card.Text>
                </Card.Body>
                </Card>
            )}
            </div>
            </div>
          </th>
         
           
            </div>
            
            
        )
    
    }
    
    render() {return (
        <Main title={title}> 
        {this.renderTable()} 
        </Main> )
  
}
}