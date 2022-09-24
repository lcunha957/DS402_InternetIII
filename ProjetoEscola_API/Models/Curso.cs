using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ProjetoEscola_API.Models{

    public class Curso{

         public int id { get; set; }
        [Required(ErrorMessage = "Use as setas para ter o curso com 2 números")]
        [Range(1,2)]
        [DataType(DataType.Currency)]
         public int? codCurso { get; set; }
        [Required(ErrorMessage = "Nome do curso com até 30 letras")]
        [StringLength(30)]
         public string? nomeCurso { get; set; } // varchar 30
        [Required(ErrorMessage = "Sigla do turno com 1 letra: M, V ou N")]
        [StringLength(1)]
         public string? periodo { get; set; } // varchar 1
    }
}