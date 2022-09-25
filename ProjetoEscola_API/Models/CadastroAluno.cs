using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProjetoEscola_API.Models{
 

 public class CadastroAluno{

        public int id { get; set; }
        public string? ra { get; set; }
        public string? nomeAluno { get; set; }
        public int al_codCurso { get; set; }
        public string? al_nomeCurso { get; set; }
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
[al_nomeCurso] VARCHAR(30) NULL,
PRIMARY KEY CLUSTERED ([id] ASC),
CONSTRAINT fk_CadNomeCurso FOREIGN KEY (al_nomeCurso) REFERENCES Curso (nomeCurso),
CONSTRAINT fk_CadCodCurso FOREIGN KEY (al_codCurso) REFERENCES Curso (codCurso)
);

*/