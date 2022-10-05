using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ProjetoEscola_API.Models{

    public class Curso{

         public int id { get; set; }

         public int codCurso { get; set; }

         public string? nomeCurso { get; set; } // varchar 30
         
         public string? periodo { get; set; } // varchar 1
    }
}



/* SCRIPT SQL:
(o Unique foi para que o campo nomeCurso seja reconhecido posteriormente em relações de chave estrangeira);
create Table Curso(
[id] INT IDENTITY(1,1) NOT NULL,
[codCurso] INT NULL,
[nomeCurso] VARCHAR(30) UNIQUE,
[periodo] VARCHAR(10) NULL,
PRIMARY KEY CLUSTERED([id] ASC)
);

INSERT INTO Curso (codCurso, nomeCurso, periodo) values (19, 'Informatica', 'Matutino');
INSERT INTO Curso(codCurso, nomeCurso, periodo) values (39, 'Desenvolvimento para Internet', 'Vespertino');
INSERT INTO Curso(codCurso, nomeCurso, periodo) values (59, 'Desenvolvimento de Sistemas ', 'Noturno');
INSERT INTO Curso(codCurso, nomeCurso, periodo) values (85,	 'Maquiagem Profissional','Matutino');
INSERT INTO Curso (codCurso, nomeCurso, periodo) values (5,'Confeitaria','Vespertino');

*/