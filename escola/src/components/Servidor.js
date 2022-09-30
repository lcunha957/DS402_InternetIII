// instalar a biblioteca https://www.npmjs.com/package/mssql npm install mssql


var express = require('express');
var aplicacao = express();

aplicacao.get('/codigoCursos', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'bd21106',
        password: 'BD21106',
        server: 'regulus.cotuca.unicamp.br', 
        database: 'BD21106' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log("Erro de conexao:" + err);

        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
         const result1 = request.query('select codCurso from Curso where codCurso = ? order by id ', function (err1, recordset1) {
            
            if (err1) console.log("Erro na seleção de codigos de curso" +err1)

            // send records as a response
            res.send(recordset1);
            
        });
         
         const result2 = request.query('select nomeCurso from Curso where nomeCurso = ? order by id', function(err2, recordset2){
           if (err2) console.log("Erro na seleção dos nomes de curso" + err2)
           
           res.send(recordset2);  
         });
    }).then(() => {
        console.log("Conexão com o SQL server realizada com sucesso!");
    }).catch((erro) => {
        console.log("Verifique a conexão com o SQL Server, apresentou o erro: " +erro);
    });
});

var servidor = aplicacao.listen(3000, function () {
    console.log('Server is running..');
});


