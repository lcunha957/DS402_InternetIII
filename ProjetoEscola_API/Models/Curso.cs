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