import React, { Component } from "react";

import "./CrudCurso.css";

import Main from "../template/Main";

const title = "Cadastro de Cursos";

const Cursos = [
  { id: 1, codCurso:16, nomeCurso: "Alimentos", período: "matutino" },
  { id: 2, codCurso:19, nomeCurso: "Informática", período: "matutino" },
  { id: 3, codCurso:39, nomeCurso: "Desenvolvimento de Sistemas", período: "vespertino" },
  { id: 4, codCurso:59, nomeCurso: "Desenvolvimento de Sistemas", período: "noturno" },
  
];

export default class CrudCurso extends Component {
  renderTable() {
    return (
      <div className="listagemCursos">
        <table className="listaCurso" id="tblListaCursos">
          <thead>
            <tr className="cabecTabelaCurso">
              <th className="tabTitulocodCurso">Código </th>
              <th className="tabTituloNomeCurso">Nome</th>
              <th className="tabTituloPeríodo">Período</th>
            </tr>
          </thead>

          <tbody>
          {Cursos.map( 
                      (curso) =>
                       <tr key={curso.id}>
                        <td>{curso.codCurso}</td>
                        <td>{curso.nomeCurso}</td>
                        <td>{curso.período}</td>
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
                {this.renderTable()} 
                </Main> )
}
}
