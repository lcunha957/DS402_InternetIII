// instalar a biblioteca https://www.npmjs.com/package/mssql npm install mssql


const express = require('express');
const aplicacao = express();

const bodyParser = require('body-parser');
const port = 3000;
const connStr = "Server=regulus.cotuca.unicamp.br; Database=bd21106; User ID=BD21106; Password=BD21106";

const sql = require("mssql");

sql.connect(connStr)
.then(conn => 
    global.conn = conn,
     console.log(" A conexão com o banco de dados foi feita com sucesso!"))
.catch(err=> console.log("erro! " + err));


aplicacao.use(bodyParser.urlencoded({ extended: true }));
aplicacao.use(bodyParser.json());


const router = express.Router();
router.get('/', (req,res) => console.log(res.json({ message: 'Funcionando!' })));
aplicacao.use('/', router);

aplicacao.listen(port);
console.log('Servidor funcionando com APi na porta: ' + port);


function execSQLQuery(sqlQry, res){
    global.conn.request()
    .query(sqlQry)
    .then(result => res.json(result.recordset))
    .catch(err => res.json(err));
}

 const router1 = router.get('/nomeCurso', (req,res) => {
 let resultadoDaRota1 = execSQLQuery('Select nomeCurso from Curso order by codCurso' , res)
})


 const router2 = router.get('/nomeCurso/:codCurso?', (req,res) =>{
    let filter = '';
    if(req.params.id) filter = 'Where codCurso=' + parseInt(req.params.id);
    let resultadoDaRota2 = execSQLQuery('Select nomeCurso from Curso' + filter + 'order by codCurso', res)
});

 const router3 = router.get('/CadastrarAluno', (req,res) =>{
    let resultadoDaRota3 =execSQLQuery('Select * from CadastroAluno', res);
})

 const router4 = router.get('/CadastrarAluno/:id?', (req,res) =>{
    let filter = '';
    if(req.params.id) filter = 'Where ID = ' + parseInt(req.params.id);
let resultadoDaRota4 = execSQLQuery('Select * from CadastroAluno' + filter, res);
})

const router5 = router.delete('/CadastrarAluno/:id', (req,res) =>{
    let resultadoDaRota5 = execSQLQuery('Delete CadastroAluno where ID=' + parseInt(req.params.id), res);
})

const router6 = router.post('/CadastrarAluno', (req,res) =>{
    const id = parseInt(req.body.id);
    const ra = req.body.ra.substring(0,5);
    const nomeAluno = req.body.nomeAluno.substring(0,30);
    const al_codCurso = parseInt(req.body.al_codCurso);
    const al_nomeCurso = req.body.al_nomeCurso.substring(0,30);
    let resultadoDaRota6 = execSQLQuery(`Insert Into CadastroAluno(ID,RA, NOMEALUNO, AL_CODCURSO, AL_NOMECURSO) values(${id}, '${ra}',
    '${nomeAluno}', ${al_codCurso}, '${al_nomeCurso}')`, res)
})

// para atualizar a tabela CadastroAluno
 const router7 = router.patch('/CadastrarAluno/:id', (req,res) =>{
    const id = parseInt(req.body.id);
    const ra = req.body.ra.substring(0,5);
    const nomeAluno = req.body.nomeAluno.substring(0,30);
    const al_nomeCurso = req.body.al_nomeCurso.substring(0,30);
let resultadoDaRota7 = execSQLQuery(`UPDATE CadastroAluno SET NOMEALUNO ='${nomeAluno}', AL_NOMECURSO='${al_nomeCurso}'  
    WHERE ID=${id} and RA='${ra}')`, res)
})