using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjetoEscola_API.Data;

namespace ProjetoEscola_API.Services
{


 
public class CadastroAlunosService: ICadastroAlunoService
{
    
     private readonly EscolaContext _context;
 
 public CadastroAlunosService (EscolaContext context)
 {
   _context = context; 
 } 
 
    public async Task<IEnumerable<AlunoCadastro>> GetCadastroAlunos()
    {
        try{
        return await  _context.CadastroAluno.ToListAsync();
  
        }
        catch(error){ return Throw New Exception ("erro encontrado:" + error) }
            }
    
      public async Task<IEnumerable<CadastroAluno>> GetCadastroAlunoByNome (string nomeAluno)
   {
       if (!string.IsNullOrWhiteSpace(nomeAluno))
       {
         cadastroaluno = await _context.CadastroAluno.Where( n => n.Nome.Contains(nomeAluno)).ToListAsync();
       }
       
       else
       {
         cadastroaluno = await GetCadastroAlunos();
       }
       
       return cadastroaluno; 
   }
    
   public async Task<CadastroAluno> getCadastroAluno(int id)
    {
        var cadastroaluno = await _context.CadastroAluno.FindAsync(id);
       return cadastroaluno; 
    }
   
  
     public async Task CreateCadastroAluno (CadastroAluno cadastroaluno)
    {
        _context.CadastroAluno.Add(cadastroAluno);
         await _context.SaveChangesAsync();
    }
    
    public async Task UpdateCadastroAluno(CadastroAluno cadastroaluno)
    {
        _context.Entry(cadastroaluno).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
     
    public async Task DeleteCadastroAluno(CadastroAluno cadastroaluno)
    {
              _context.CadastroAluno.Remove(cadastroAluno);
         await _context.SaveChangesAsync();
    }
    
 

 

}    

}