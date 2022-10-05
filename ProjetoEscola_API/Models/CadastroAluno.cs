using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProjetoEscola_API.Models{
 

 public class CadastroAluno{

        public int id { get; set; }
 
        public string? ra { get; set; }
       
        public string? nomeAluno { get; set; }
       
        public int al_codCurso { get; set; }

       // public string? image { get;set; }

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
add [image] varchar(500)


update CadastroAluno 
set [image] = 'https://api.thecatapi.com/v1/images/search'
where[image] = 'null'

*/