using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace ProjetoEscola_API.Models{
    
    public class Aluno{
        
        public int id { get; set; }
        public string? ra { get; set; }
        public string? nome { get; set; }
        public int codCurso { get; set; }
        
        }
        
        }