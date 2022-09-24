using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProjetoEscola_API.Models{
    
    public class Aluno{
        
        public int id { get; set; }
        [Required(ErrorMessage = "Ra com até 5 números")]
        [DisplayName("ra")]
        [StringLength(5)]
        public string? ra { get; set; }
        [Required(ErrorMessage = "Nome com até 30 letras")]
        [DisplayName("nome")]
        [StringLength(30)]
        public string? nome { get; set; }
        [Required(ErrorMessage = "Use as setas para ter o curso com 2 números")]
        [DisplayName("código do curso")]
        [StringLength(2)] 
        public int codCurso { get; set; }
        
        }
        
        }