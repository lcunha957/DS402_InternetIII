
import React, { Component } from "react";

import axios from 'axios';

import "./CrudCadastroAluno.css";

import Main from "./template/Main";

const title = "Cadastrando os Alunos";

const urlAPIAluno="http://localhost:5277/api/CadastroAluno/GetAll";

const urlAPICurso = "http://localhost:5277/api/curso";

const urlAPIAlunoPut = "http://localhost:5277/api/CadastroAluno/put";

const urlAPIAlunoPost = "http://localhost:5277/api/CadastroAluno/post";

const urlAPIAlunoDelete = "http://localhost:5277/api/CadastroAluno/delete";

//const urlAPIAlunoGetId = "http://localhost:5277/api/CadastroAluno/CadastroAlunoId";

const initialState= { 
alunos:{ id: 0,  ra:"", nomeAluno:"", al_codCurso:"",foto:""},
listaDeAluno:[],
 };

const ConfiguracaoDeCursos = {
cursos:{id: 0, codCurso:"", nomeCurso:"", periodo: ""},
listaDeCurso:[],
}  


export default class CrudCadastroAluno extends Component {

state={ ...initialState, ...ConfiguracaoDeCursos }


componentDidMount() {
axios(urlAPIAluno).then(resp => {
this.setState ({ listaDeAluno: resp.data })
});

axios(urlAPICurso).then(resp =>{
this.setState({listaDeCurso: resp.data})   
})
}


limpar() {
this.setState({ alunos: initialState.alunos });
}

      
salvar() { 
const alunos = this.state.alunos; 

alunos.al_codCurso = Number(alunos.al_codCurso)
const metodo = alunos.id ? 'put' : 'post'; 

const url = alunos.id ? `${urlAPIAlunoPut}/${alunos.id}` : urlAPIAlunoPost;
axios[metodo](url, alunos).then(resp => {
const listaDeAluno = this.getListaDeAlunosAtualizada(resp.data);
  this.setState({ alunos: initialState.alunos, listaDeAluno }); 
});}



getListaDeAlunosAtualizada(alunos,add = true) {
const listaDeAluno = this.state.listaDeAluno.filter(a => a.id !== alunos.id);
if (add) listaDeAluno.unshift(alunos); 
return listaDeAluno;
}

getListaDeCursosAtualizada(cursos,add = true) {
const listaDeCurso = this.state.listaDeCurso.filter(a => a.id !== cursos.id);
if (add) listaDeCurso.unshift(cursos); 
return listaDeCurso;
}


atualizaCampo(event) { 
//clonar usuário a partir do state, para não alterar o state diretamente
const alunos = { ...this.state.alunos }; 
//usar o atributo NAME do input identificar o campo a ser atualizado 
alunos[event.target.name] = event.target.value;
//atualizar o state 
this.setState({ alunos }); 
}
        
           
carregar(alunos) {
this.setState({ alunos });
const url = urlAPIAlunoPut + "/" + alunos.id;
if (window.confirm("Confirma edição do aluno: " + alunos.ra)) {
console.log("entrou na confirmação de editar o aluno");
axios['put'](url, alunos).then((resp) => {
const listaDeAluno = this.getListaDeAlunosAtualizada(alunos, false);
this.setState({ alunos: initialState.alunos, listaDeAluno });
});
}
}


remover(alunos) {
const url = urlAPIAlunoDelete + "/" + alunos.id;
if (window.confirm("Confirma remoção do aluno: " + alunos.ra)) { 
console.log("entrou na confirmação de remover o aluno");
axios['delete'](url, alunos).then(resp => { 
const listaDeAluno = this.getListaDeAlunoAtualizada(alunos, false) 
this.setState({ alunos: initialState.alunos, listaDeAluno })
});
}
}


handleCodCursoChange = (event) => {
  const alunos = { ...this.state.alunos };
  alunos.al_codCurso = Number(event.target.value);
  this.setState({ alunos })
  }




renderForm() {
return (
<div className="inclui-container">
             
<label> RA: </label> 
<input type="text" id="ra" placeholder="RA do aluno"  className="form-input" name="ra" 
defaultValue={this.state.alunos.ra} onChange={ e => this.atualizaCampo(e)}/>

                             
<label> Nome: </label>
<input type="text" id="nomeAluno" placeholder="Fulano da Silva"  className="form-input"  name="nomeAluno"
defaultValue={this.state.alunos.nomeAluno} onChange={ e => this.atualizaCampo(e)}/> 
 
<label> Informações sobre o Curso: </label> 
<select className="seletor" name="codigoCurso" onChange={event => this.handleCodCursoChange(event)}>
<option value={"selecionar"}> Selecione um curso </option>
{this.state.listaDeCurso.map((cursos) => (
<option key={cursos.id}  name="codigoCurso" value={cursos.codCurso}>
{cursos.nomeCurso}</option>))}
</select>
               
<button className="botaoSalvar" type="submit" onClick={e => this.salvar(e)} > Salvar </button> 

<button className="botaoCancelar" type="reset" onClick={e => this.limpar(e)} > Cancelar </button> </div>)}

renderTable() {
  return (
  <div className="listagemCadastroAlunos">
<table className="listaCadastroAlunos" id="tblListaCadastroAlunos">
<thead>
<tr className="cabecTblCadAluno">
<th className="tabTitCadRa">Ra</th>
<th className="tabTitCadNome">Nome</th>
<th className="tabTitCadCurso">Curso</th>
</tr>
</thead>
                    
<tbody>
{this.state.listaDeAluno.map((alunos) =><tr key={alunos.id}>
<td>{alunos.ra}</td>
<td>{alunos.nomeAluno}</td>
<td>{alunos.al_codCurso}</td>
<td> 
<button  className = "botaoAltera" onClick={() => this.carregar(alunos)} > Alterar </button></td> 
<td><button className = "botaoRemove" onClick={() => this.remover(alunos)} > Remover </button></td>
</tr>)}
</tbody></table></div>);}
                    
render() {return (
<Main title={title}> 
{this.renderForm()}
{this.renderTable()} 
</Main> )
}
}
                    

