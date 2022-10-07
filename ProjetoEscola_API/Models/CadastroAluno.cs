using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProjetoEscola_API.Models{
 

 public class CadastroAluno{

        public int id { get; set; }
 
        public string? ra { get; set; }
       
        public string? nomeAluno { get; set; }
       
        public int al_codCurso { get; set; }

        public string? NomeFoto { get;set; }

 }

}



/*
 PARA QUE O CODCURSO E O NOMECURSO DA TABELA CURSO SEJA RECONHECIDO:
Tive que refazer a tabela Curso...
create Table Curso(
[id] INT IDENTITY(1,1) NOT NULL,
[codCurso] INT UNIQUE,
[nomeCurso] VARCHAR(30) UNIQUE,
[periodo] VARCHAR(10) NULL,
PRIMARY KEY CLUSTERED([id] ASC)
);

INSERT INTO Curso (codCurso, nomeCurso, periodo) values (19, 'Informatica', 'Matutino');
INSERT INTO Curso(codCurso, nomeCurso, periodo) values (39, 'Desenvolvimento para Internet', 'Vespertino');
INSERT INTO Curso(codCurso, nomeCurso, periodo) values (59, 'Desenvolvimento de Sistemas ', 'Noturno');
INSERT INTO Curso(codCurso, nomeCurso, periodo) values (85,	 'Maquiagem Profissional','Matutino');
INSERT INTO Curso (codCurso, nomeCurso, periodo) values (5,'Confeitaria','Vespertino');


create table CadastroAluno(

[id] INT IDENTITY (1,1) NOT NULL,
[ra] CHAR(5) NOT NULL,
[nomeAluno] VARCHAR(30) NULL,
[al_codCurso] INT,
PRIMARY KEY CLUSTERED ([id] ASC),
);

TENTEI COLOCAR A COLUNA DE ALUNO, MAS: DÁ ERRO DE PUXAR A IMAGEM RANDÔMICA NA API CAT;
PORTANTO, RETIREI A COLUNA DE IMAGEM.

alter table CadastroAluno 
add constraint  fk_CadCodCurso
foreign key (al_codCurso) references Curso (codCurso);

PRA RENDERIZAR A API CAT IMAGE
alter table CadastroAluno 
add [imagem] varchar(500)


update CadastroAluno 
set [imagem] = 'https://api.thecatapi.com/v1/images/search'
where[imagem] = 'null'

PARA RECONHECER A IMAGEM, EM CONFORMIDADE COM AS ROTAS DA APOSTILA 05 DE ASP.NET
create table CadastroAluno(

[id] INT IDENTITY (1,1) NOT NULL,
[ra] CHAR(5) NOT NULL,
[nomeAluno] VARCHAR(30) NULL,
[al_codCurso] INT,
[nomeFoto] VARCHAR(500) NULL,
PRIMARY KEY CLUSTERED ([id] ASC),
FOREIGN KEY ([al_codCurso]) references Curso ([codCurso]) 
);

Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [imagem]) values ('21106', 'Lunara Cunha', 19, 'https://cdn2.thecatapi.com/images/hz0fwFell.jpg')
Insert into CadastroAluno  ([ra],[nomeAluno],[al_codCurso], [imagem]) values ('17485','Geraldo Osório', 39, 'https://cdn2.thecatapi.com/images/3t7.jpg')
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [imagem]) values ('21567', 'Boca Rosa', 5, 'https://cdn2.thecatapi.com/images/3Wjx1Tq7X.jpg')
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [imagem]) values ('34567', 'Marina Morena',59,'https://cdn2.thecatapi.com/images/MTc3NjExMw.jpg')
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [imagem]) values ('15247','Roberto Sião',85,	'https://cdn2.thecatapi.com/images/bqq.jpg')
Insert into CadastroAluno ([ra], [nomeAluno], [al_codCurso], [imagem]) values ('15937','Bon Jovi',59, 'https://cdn2.thecatapi.com/images/4r2.jpg')
Insert into CadastroAluno ([ra],[nomeAluno], [al_codCurso], [imagem]) values ('27984','Florentina de Jesus',39,'https://cdn2.thecatapi.com/images/3mc.jpg') 
Insert into CadastroAluno ([ra], [nomeAluno], [al_codCurso], [imagem]) values ('18995','Gael Schneider',59,'https://cdn2.thecatapi.com/images/9m.gif')


PARA USAR IMAGENS INTERNAS:
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [nomeFoto]) values ('21106', 'Lunara Cunha', 19, null)
Insert into CadastroAluno  ([ra],[nomeAluno],[al_codCurso], [nomeFoto]) values ('17485','Geraldo Osório', 39, null)
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [nomeFoto]) values ('21567', 'Boca Rosa', 5, null)
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [nomeFoto]) values ('34567', 'Marina Morena',59, null)
Insert into CadastroAluno ([ra],[nomeAluno],[al_codCurso], [nomeFoto]) values ('15247','Roberto Sião',85,null)
Insert into CadastroAluno ([ra], [nomeAluno], [al_codCurso], [nomeFoto]) values ('15937','Bon Jovi',59,null)
Insert into CadastroAluno ([ra],[nomeAluno], [al_codCurso], [nomeFoto]) values ('27984', 'Florentina de Jesus', 39, null) 
Insert into CadastroAluno ([ra], [nomeAluno], [al_codCurso], [nomeFoto]) values ('18995','Gael Schneider',59,null)

*/