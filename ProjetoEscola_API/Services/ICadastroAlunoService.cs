using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoEscola_API.Services{

public interface ICadastroAlunoService
{
 Task<IEnumerable<AlunoCadastro>> GetCadastroAlunos();
 
 Task<CadastroAluno> getCadastroAluno(int id);
 
 Task<IEnumerable<CadastroAluno>> GetCadastroAlunoByNome (string nomeAluno);
 
 Task CreateCadastroAluno (CadastroAluno cadastroaluno);
 
 Task UpdateCadastroAluno (CadastroAluno cadastroaluno);
 
 Task DeleteCadastroAluno (CadastroAluno cadastroaluno);
     
}

    
} 