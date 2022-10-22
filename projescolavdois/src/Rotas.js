import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './components/template/Main';

import CrudCadastroAluno from './components/CrudCadastroAluno';

import CrudAluno from './components/CrudAluno';

import CrudCurso from './components/CrudCurso';

import Carometro from './components/Carometro';

import Posts from '../src/Posts';

import TesteCarometro from './components/TesteCarometro';

export default function Rotas() {
  return (
    <Routes>

     <Route exact path="/" element={<CrudAluno/>} component={CrudAluno}/>
     
     <Route path='/posts' element={<Posts/>} component={Posts}/>
          
     <Route path='/testecarometro' element={<TesteCarometro/>} component={TesteCarometro}/>


     <Route path='/alunos' element={<CrudCadastroAluno/>} component={CrudCadastroAluno} />

      <Route path='/cursos' element={<CrudCurso />} component={CrudCurso} />

        <Route path='/carometro'element={<Carometro/>} component={Carometro}/> 

        
    </Routes>
  );
}
