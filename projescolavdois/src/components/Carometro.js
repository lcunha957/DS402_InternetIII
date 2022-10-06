import React, { Component } from "react";

import axios from 'axios';

import Main from "./template/Main";

import "./Carometro.css";

import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

import ImagensAlunos from "./ImagensAlunos";

const title = "Portfólio das turmas";


const urlAPIEstudante="http://localhost:5277/api/CadastroAluno";

const urlAPICurso="http://localhost:5277/api/curso";

const urlAPIEstudanteCodCurso = "http://localhost:5277/api/CadastroAluno/CadastroAlunoCodigoCurso"

const initialState= { 
    estudantes:{ id: 0,  ra:"", nomeAluno:"", al_codCurso:"", imagem:""},
    listaDeEstudante:[],
     };

     const Curso = {
        cursos:{id: 0, codCurso:"", nomeCurso:"", periodo: ""},
        listaDeCurso:[],
        };
        
     
     
     
export default class Carometro extends Component{
    state={ ...initialState, ...Curso }

    
componentDidMount() {
    axios(urlAPIEstudante).then(resp => {
    this.setState ({ listaDeEstudante: resp.data })
    });
    
    axios(urlAPICurso).then(resp =>{
    this.setState({ listaDeCurso: resp.data })   
    });
}

    getListaDeEstudantesPorCodCursoAtualizada(estudantes,add = true) {
        const listaDeEstudante = this.state.listaDeEstudante.filter(a => a.al_codCurso !== estudantes.al_codCurso);
        if (add) listaDeEstudante.unshift(estudantes); 
        return listaDeEstudante;
        }

                
        handleCodCursoChange = (event) => {
            const estudantes = { ...this.state.estudantes };
            estudantes.al_codCurso = Number(event.target.value);
            this.setState({ estudantes })
            }
    
            
        filtrarEstudante() { 
            const estudantes = this.state.estudantes;             
            estudantes.al_codCurso = Number(estudantes.al_codCurso)
            const url = urlAPIEstudanteCodCurso + `/${estudantes.al_codCurso}`; 
            axios['get'](url, estudantes).then(resp => {
            const listaDeEstudante = this.getListaDeEstudantePorCodCursoAtualizada(resp.data);
              this.setState({ estudantes: initialState.estudantes, listaDeEstudante }); 
            });}

    
       


       renderTable(){
   
        return(
            <div class="container" className= "leao">
            
        <th>
            <tr>
            <select className="seletorCurso"  name="infoCurso" onChange={event => this.handleCodCursoChange(event)}>
                <option value={"selecionar"}> Selecione um curso </option>
            {this.state.listaDeCurso.map((cursos) => (
             <option key={cursos.id}  name="codigoCurso" value={cursos.codCurso}>
         {cursos.codCurso} - {cursos.nomeCurso} </option>))}
             </select>
            </tr>
            <button className="btnFiltrar" onClick={e => this.filtrarEstudante(e)}> Filtrar </button>
            </th>
            
            <th>
            <div class= "Row">
            <div class="col-md-2">
            {this.state.listaDeEstudante.map((estudantes) => 
            <>
            <Card key={estudantes.id} className="lontra">
                   <Card.Body>
              <ImagensAlunos/>
                <Card.Title className="chafariz"> RA: {estudantes.ra} </Card.Title>
                <Card.Subtitle className="ornitorrinco"> Nome do Aluno: {estudantes.nomeAluno}</Card.Subtitle>
                <Card.Text className="zebra"> Código do Curso: {estudantes.al_codCurso}</Card.Text>
              </Card.Body>
                </Card>
                <hr/>
                </>  
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





    




/************************SESSÃO DE TESTE E EXPLICAÇÕES********************************/
/* 1.Erro ao qual não encontro solução(não encontrei o arquivo webpack.config.js): 
"BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "url": require.resolve("url/") }'
        - install 'url'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "url": false }"
 
        2. Instalei o PowrShell direto no Visual Studio Code ao qual realizou as importações dos breakings changes,
        eles ocorreram após um erro de cors mesmo com a implementação de npm install cors --save.

        3.Tentei passar uma lista de imagens da API Pixabay para iterar o index, mas o react tem
        outra estrutura ao qual me impede de usar o índice, mesmo seguindo esse tutorial:
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length

        No arquivo: Carometro.js, tentei fazer:
        const imagens=[
    {id:"1", url:"https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg"},
    {id:"2", url:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534493_960_720.jpg"},
    {id:"3", url:"https://cdn.pixabay.com/photo/2019/04/28/18/34/orange-4163953_960_720.jpg"},
    {id:"4", url:"https://cdn.pixabay.com/photo/2015/11/25/09/52/star-anise-1061572_960_720.jpg"},
    {id:"5", url:"https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg"},
    {id:"6", url:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg"},
    {id:"7", url:"https://cdn.pixabay.com/photo/2015/07/10/18/36/still-life-840014_960_720.jpg"},
    {id:"8", url:"https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg"}
];

  e no DBeaver:
  Create table ImagemAluno (
[id] INT IDENTITY(1,1) NOT NULL,
[url] VARCHAR(500),
[width]  INT,
[height] INT,
PRIMARY KEY CLUSTERED([id] ASC)
)

select * from ImagemAluno 
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg', 250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534493_960_720.jpg',250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2019/04/28/18/34/orange-4163953_960_720.jpg',250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2015/11/25/09/52/star-anise-1061572_960_720.jpg',250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg',250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg',250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2015/07/10/18/36/still-life-840014_960_720.jpg',250,230)
Insert into ImagemAluno (url, width, height) values ('https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg',25

Por algum motivo, o src de img não itera a posição do id para ser passado como elemento-chave quando
faço: figuras.url[id] e retorna o array na vertical repetidamente.

Desenvolvimento de uma função para encontrar o id do src manualmente:
encontrarImagem= (f) =>{
                    const figuras = this.state.ImagemAluno.figuras;
                    const codigoDaImagem = Number(figuras.codImg);
                    const idx = figuras.indexOf(codigoDaImagem);
                    const URLDaApi = `${urlAPIGatinhos}/${figuras.id}`;
                
                    axios['get'](URLDaApi, figuras).then(resp => {
                        const listaDeFiguras = this.getListaDeFigurasAtualizada(resp.data);
                        this.setState({ figuras: initialState.figuras, listaDeFiguras }); 
                    
                     const Index = listaDeFiguras.map((f) =>{
                        if(figuras.codImg === Number(figuras.id)){
                         const url = figuras.filter[idx];
                         const src = figuras.url;
                        
                        return ({src});
                     }
                    })
                })
            }


        3.Tentei passar uma coluna de image para a tabela CadastroAluno, como varchar(500) e populado
        com a API dos gatos randômicos (vide arquivo: ImagemDosAlunos.js), mas não mapeia nem
        captura o índice correto do elemento aluno, mesmo fazendo um método get dedicado a capturar
        o código de curso sobre cada aluno:

        ESSE CÓDIGO ESTÁ COMENTADO EM CADASTROALUNOCONTROLLER.CS:
          
        [HttpGet("{CadastroAlunoAlCodCurso}")]
        public ActionResult<List<CadastroAluno>> Get( int CadastroAlunoAlCodCurso, CadastroAluno CadastroAlunoOri)
        {
            try
            {
                var result = await _context.CadastroAluno.FindAsync(CadastroAlunoAlCodCurso);
                   if (CadastroAlunoAlCodCurso != result.id)
                {
                    return BadRequest();
                }
                result.ra = CadastroAlunoOri.ra;
                result.nomeAluno = CadastroAlunoOri.nomeAluno;
                result.al_codCurso = CadastroAlunoOri.al_codCurso;
                result.image = CadastroAlunoOri.image;

                return Created($"/api/cadastroaluno/{CadastroAlunoOri.ra}", CadastroAlunoOri);
            }
            catch
            {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados."
                );
            }
        }

        No DBEAVER tentei fazer:
        PRA RENDERIZAR A API CAT IMAGE
alter table CadastroAluno 
add [image] varchar(500)


update CadastroAluno 
set [image] = 'https://api.thecatapi.com/v1/images/search'
where[image] = 'null'

NO ARQUIVO: CAROMETRO.JS

var express = require('express');
     var cors = require('cors');
     var app = express();
     
     app.use(cors());
     
     app.get('/cadastroaluno/:id', function (req, res, next) {
       res.json({msg: 'This is CORS-enabled for all origins!'})
     })
     
     app.listen(80, function () {
       console.log('CORS-enabled web server listening on port 80')
     })
      
        const ImagemDeAluno ={
        figuras:{id:0, codImg:"", url:"", width:"", height:""},
        listaDeFiguras:[],
     };

         axios(urlAPIDeGatos).then(resp =>{
        this.setState({ listaDeFiguras: resp.data})
    });

    state = {...ImagemDeAluno}

    handleCodCursoChange = (event) => {
        const estudantes = { ...this.state.estudantes };
        const index = Number(event.target.value);
         estudantes.al_codCurso = index;
         const teste = this.state.listaDeEstudante.estudantes.al_codCurso;
         console.log(teste);

        this.setState({ estudantes })

        if((this.state.listaDeEstudante.estudantes.al_codCurso) > 0){
          return Card;  
        }
          
        else {
         return redirect(urlAPICurso);   
        }

      
        } 

        getListaDeEstudantesAtualizada(estudantes,add = true) {
            const listaDeEstudante = this.state.listaDeEstudante.filter(g => g.id !== estudantes.id);
            if (add) listaDeEstudante.unshift(estudantes); 
            return listaDeEstudante;
            }

            getListaDeFigurasAtualizada(figuras,add = true) {
                const listaDeFiguras = this.state.listaDeFiguras.filter(a => a.id !== figuras.id);
                if (add) listaDeFiguras.unshift(figuras); 
                return listaDeFiguras;
                }

        encontrarAlunos() { 
            const estudantes = this.state.estudantes; 
            const figuras = this.state.figuras;
            estudantes.al_codCurso = Number(estudantes.al_codCurso)
            estudantes.image = figuras.url;
             const urlEstudante = estudantes.id =`${urlAPIEstudante}/${estudantes.id}`;
            axios['get'](urlEstudante, estudantes).then(resp => {
            const listaDeFiguras = this.getListaDeFigurasAtualizada(resp.data);
            this.state({ figuras: initialState.figuras, listaDeFiguras});    
            const listaDeEstudante = this.getListaDeEstudantesAtualizada(resp.data);
              this.setState({ estudantes: initialState.estudantes, listaDeEstudante }); 
            
            })
        };
       O verbo get me retorna id=0 , e o código 404, pois não reconheceu o campo al_codCurso como um campo pertencente ao array de
         Estudantes, proveniente da tabela CadastroAluno.
        */
        
                  
 
                


                  
 
                
    }
