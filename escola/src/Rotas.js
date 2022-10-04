import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './components/template/Main';
<<<<<<< HEAD

import CrudCurso from './components/CrudCurso';
import CrudCadastroAluno from './components/CrudCadastroAluno';
=======
import CrudCurso from './components/CrudCurso';
import CrudCadastroAluno from './components/CrudCadastroAluno'
>>>>>>> 3e1e2997cd92438e35ef2a43995271fab074f7f5

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

<<<<<<< HEAD
      <Route path='/alunos' element={<CrudCadastroAluno />} />
=======

      <Route path='/alunos' element={<CrudCadastroAluno/>} />
>>>>>>> 3e1e2997cd92438e35ef2a43995271fab074f7f5
      
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
