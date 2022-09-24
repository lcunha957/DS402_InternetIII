using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProjetoEscola_API.Models{
    
    public class Aluno{
        
        public int id { get; set; }
        [Required(ErrorMessage = "Ra com até 5 números")]
        [StringLength(5)]
        public string? ra { get; set; }
        [Required(ErrorMessage = "Nome com até 30 letras")]
        [StringLength(30)]
        public string? nome { get; set; }
        [Required(ErrorMessage = "Use as setas para ter o curso com 2 números")]
        [Range(1,2)]
        [DataType(DataType.Currency)]
        public int codCurso { get; set; }
        
        }
        
        }