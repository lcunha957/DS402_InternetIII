import React, { Component } from "react";

import axios from 'axios';

import Main from "./template/Main";

import "./Carometro.css";

import bootstrap from 'bootstrap';

import ImagensDosAlunos from "./ImagensDosAlunos";

import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

import { redirect } from "react-router-dom";

const title = "Portfólio das turmas";



const urlAPIEstudante="http://localhost:5277/api/cadastroaluno";
const urlAPICurso="http://localhost:5277/api/curso";

const initialState= { 
    estudantes:{ id: 0,  ra:"", nomeAluno:"", al_codCurso:""},
    listaDeEstudante:[],
     };

     const Curso = {
        cursos:{id: 0, codCurso:"", nomeCurso:"", periodo: ""},
        listaDeCurso:[],
        }  

          
           
export default class Carometro extends Component{
    state={ ...initialState, ...Curso }

    
componentDidMount() {
    axios(urlAPIEstudante).then(resp => {
    this.setState ({ listaDeEstudante: resp.data })
    });
    
    axios(urlAPICurso).then(resp =>{
    this.setState({listaDeCurso: resp.data})   
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
            <>
            
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
             <div className="furacao">{this.state.listaDeEstudante.map((estudantes) => 
             <Card key={estudantes.id}>
                <ImagensDosAlunos/>
                <CardBody className="lontra">
                    <CardTitle className="chafariz">{estudantes.ra}</CardTitle>
                    <CardText className="ornitorrinco">{estudantes.nomeAluno}</CardText>
                    <CardText>{estudantes.al_codCurso}</CardText>
                </CardBody>
             </Card>)}</div>   
            </th>
            </>
            
            
        )
    
    }
    
    render() {return (
        <Main title={title}> 
        {this.renderTable()} 
        </Main> )
  
}
}