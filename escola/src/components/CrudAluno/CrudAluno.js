import React, { Component } from "react";

import axios from 'axios';

import "./CrudAluno.css";

import Main from "../template/Main";

const title = "Cadastro de Alunos";

const urlAPI="http://localhost:5277/api/aluno";

const initialState= { 
  aluno:{ id: 0,  ra: '', nome:' ', codCurso: 0},
  lista:[]
}
/*
const Alunos = [
  { id: 1, ra: 11111, nome: "André", codCurso: 19 },
  { id: 2, ra: 22222, nome: "Amanda", codCurso: 28 },
  { id: 3, ra: 33333, nome: "Pedro", codCurso: 39 },
  { id: 4, ra: 44444, nome: "Alice", codCurso: 59 },
];*/ 

export default class CrudAluno extends Component {

  state={...initialState}

 componentDidMount() {
  axios(urlAPI).then(resp => {
    this.setState ({ lista: resp.data })
  })
 }

 limpar() {
   this.setState({ aluno: initialState.aluno }); 
  }

  salvar() { 
    const aluno = this.state.aluno; 
    aluno.codCurso = Number(aluno.codCurso); 
    const metodo = 'post'; 
    
    axios[metodo](urlAPI, aluno) 
    .then(resp => {
       const lista = this.getListaAtualizada(resp.data)
       this.setState({ aluno: initialState.aluno, lista }) 
      }) 
    }

    getListaAtualizada(aluno) {
       const lista = this.state.lista.filter(a => a.id !== aluno.id);
        lista.unshift(aluno); 
        return lista;
       }

       atualizaCampo(event) { 
        //clonar usuário a partir do state, para não alterar o state diretamente
         const aluno = { ...this.state.aluno }; 
         //usar o atributo NAME do input identificar o campo a ser atualizado 
         aluno[event.target.name] = event.target.value;
          //atualizar o state 
          this.setState({ aluno }); 
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
                value={this.state.aluno.ra} 
                onChange={ e => this.atualizaCampo(e)}
                 />

            <label> Nome: </label>
             <input type="text"
              id="nome"
              placeholder="Nome do aluno"
              className="form-input"
              name="nome"
              value={this.state.aluno.nome} 
              onChange={ e => this.atualizaCampo(e)} 
              />

              <label> Código do Curso: </label> 
              <input type="number"
              id="codCurso" 
              placeholder="0"
              className="form-input" 
              name="codCurso"
              value={this.state.aluno.codCurso}
              onChange={ e => this.atualizaCampo(e)}
               /> 

               <button className="btnSalvar"
                onClick={e => this.salvar(e)} >
                   Salvar
                    </button> 
                    <button className="btnCancelar" 
                    onClick={e => this.limpar(e)} > 
                    Cancelar 
                    </button>
                     </div> 
                     ) 
                    }

  renderTable() {
    return (
      <div className="listagem">
        <table className="listaAlunos" id="tblListaAlunos">
          <thead>
            <tr className="cabecTabelaAluno">
              <th className="tabTituloRa">Ra</th>
              <th className="tabTituloNome">Nome</th>
              <th className="tabTituloCurso">Curso</th>
            </tr>
          </thead>

          <tbody>
          {this.state.lista.map( 
                      (aluno) =>
                       <tr key={aluno.id}>
                        <td>{aluno.ra}</td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.codCurso}</td>
                         </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }

  render() { 
            return (
                <Main title={title}> 
                {this.renderForm()}
                {this.renderTable()} 
                </Main> )
}
}
