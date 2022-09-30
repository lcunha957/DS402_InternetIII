/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import axios from 'axios';

import "./CrudCadastroAluno.css";

import Main from "./template/Main";

import Servidor from "./Servidor"

const title = "Cadastro de Alunos";

const urlAPI="http://localhost:5277/api/cadastroAluno";

const sql = require("mssql"); 

const resultado1 = Servidor.router1.resultadoDaRota1;

const initialState= { 
    cadastroaluno:{ id: 0,  ra: '', nomeAluno:' ', al_codCurso: 0, al_nomeCurso: ''},
    lista:[]
  }

  export default class CrudCadastroAluno extends Component {
  
    state={ ...initialState }

    componentDidMount() {
     axios(urlAPI).then(resp => {
       this.setState ({ lista: resp.data })
     })
    }    
      
      
    limpar() {
        this.setState({ cadastroaluno: initialState.cadastroaluno }); 
       }
      
      
      salvar(){
          const cadastroaluno = this.state.cadastroaluno;
          cadastroaluno.al_codCurso = Number(cadastroaluno.al_codCurso);
          const metodo = cadastroaluno.id ? 'put' : 'post';
          const url = cadastroaluno.id ? '${urlAPI}/${cadastroaluno.id}' : urlAPI;


axios[metodo](urlAPI, cadastroaluno)
.then(resp=>{
    const lista  = this.getListaAtualizada(resp.data)
    this.setState({cadastroaluno : initialState.cadastroaluno, lista})
})     
 }
      
 getListaAtualizada(cadastroaluno,add = true) {
    const lista = this.state.lista.filter(a => a.id !== cadastroaluno.id);
    if (add) lista.unshift(cadastroaluno); 
     return lista;
    }

    atualizaCampo(event) { 
        //clonar usuário a partir do state, para não alterar o state diretamente
         const cadastroaluno = { ...this.state.cadastroaluno }; 
         //usar o atributo NAME do input identificar o campo a ser atualizado 
         cadastroaluno[event.target.name] = event.target.value;
          //atualizar o state 
          this.setState({ cadastroaluno }); 
        }
    
    
        carregar(cadastroaluno) {
            this.setState({ cadastroaluno }) 
 }
        
        
 remover(cadastroaluno) {
    const url = urlAPI + "/" + cadastroaluno.id;
     if (window.confirm("Confirma remoção do aluno: " + cadastroaluno.ra)) { 
       console.log("entrou no confirm");
       
       axios['delete'](url, cadastroaluno) 
       .then(resp => { 
         const lista = this.getListaAtualizada(cadastroaluno, false) 
         this.setState({ cadastroaluno: initialState.aluno, lista })
        })
        }
       }
 
       renderForm() {
        return (
          <div className="inclui-container">

            <label> RA: </label> 
            <input 
            type="text"
             id="ra" 
             placeholder="RA do aluno"
             className="form-input"
             name="ra" 
             value={this.state.cadastroaluno.ra} 
             onChange={ e => this.atualizaCampo(e)}
              />
              
              
              <label> Nome do Aluno: </label>
             <input type="text"
              id="nomeAluno"
              placeholder="Fulano da Silva"
              className="form-input"
              name="nomeAluno"
              value={this.state.cadastroaluno.nomeAluno}
              onChange={ e => this.atualizaCampo(e)} 
              />
              
              
          <label> Código do Curso: </label> 
          <select name="id_codCurso" id="id_codCurso" type= "number"
          className="form-input">
         <option value=""> Escolha o código do curso</option>
       <option value={resultado1['id']}></option>
      let valor = select.option[select.selectIndex].value;
       let value = {this.state.cadastroaluno.al_codCurso['valor']};
    onChange  = {e => this.atualizaCampo(e)}
          
          </select> 
          </div>
        )

  }
       
       
       


  }
