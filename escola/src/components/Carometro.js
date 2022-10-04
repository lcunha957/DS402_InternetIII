import React, { Component } from "react";

import axios from 'axios';

import Main from "./template/Main";

import "./Carometro.css";

import bootstrap from 'bootstrap';

import ImagensDosAlunos from "./ImagensDosAlunos";

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

        const Selecao=()=>{
          const cursos = Curso.cursos.codCurso;
          const estCodCurso = initialState.estudantes.al_codCurso;
          if(cursos === estCodCurso){
            const listaDeCurso = this.state.listaDeCurso.filter(a => a.id !== cursos.id);
            listaDeCurso.unshift(cursos);
            return listaDeCurso;
          }
          
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
        }

    render(){
        return(
            <select className="seletorCurso" name="infoCurso" onClick={Selecao()}
            onChange={event => this.handleCodCursoChange(event)} >
                <option value={"selecionar"}> Selecione um curso </option>
            {this.state.listaDeCurso.map((cursos) => (
             <option key={cursos.id}  name="codigoCurso" value={cursos.codCurso}>
        {cursos.nomeCurso}</option>))}
            </select>
        
        )
    
    }
    
  
}