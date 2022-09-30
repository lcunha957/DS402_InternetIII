// instalar a biblioteca https://www.npmjs.com/package/mssql npm install mssql
const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const aplicacao = express;

aplicacao.use(express.json());

const connection = sql.createPool({
    server: "regulus.cotuca.unicamp.br",
    port: 1433,
    database: "BD21106",
    user: "bd21106",
    password: "BD21106",
      pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }    
    
}) 
 

// eslint-disable-next-line no-unused-expressions
aplicacao.listen(3000, () => {
    console.log('Vai no navegador e coloque: http://localhost:3000');
})


aplicacao.get('/codigosCursos', function(req, res){
    // eslint-disable-next-line no-unused-expressions
    async () =>{
        try{
            await connection.getConnection(function(err, connection){
                // eslint-disable-next-line no-unused-vars
                const result1 =  connection.query('Select codCurso from Curso order by id', function (err, results, fields)
                 {
                     res.send(results,fields);
                 });
            });
        }  catch (err){
          res.send('erro encontrado:' + err);
      }
    
    }

});


