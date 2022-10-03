import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './components/template/Main';

import CrudCurso from './components/CrudCurso';
import CrudCadastroAluno from './components/CrudCadastroAluno';

export default function Rotas() {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <Main title="Bem Vindo!">
            <div>Cadastro de alunos, cursos e carômetro</div>
          </Main>
        }
      />

      <Route path='/alunos' element={<CrudCadastroAluno />} />
      
      <Route path='/cursos' element={<CrudCurso />} />

      <Route
        path='*'
        element={
          <Main title="Bem Vindo!">
            <div> Página não encontrada</div>
          </Main>
        }
      />
    </Routes>
  );
}
