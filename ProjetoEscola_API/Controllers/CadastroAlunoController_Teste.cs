using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoEscola_API.Controllers
{
[Route("api/[controller]")]
[ApiController]

public class CadastroAlunoController_Teste : ControllerBase
{
    private ICadastroAlunoService _cadastroalunoService;
    
    public CadastroAlunoController_Teste(ICadastroAlunoService cadastroalunoService)
    {
        _cadastroalunoService = cadastroalunoService;
    }
    
    [HttpGet]
    public async Task<ActionResult<IAsyncEnumerable<CadastroAluno>>> GetCadastroAlunos()
    {
        try{
        var cadastroaluno = await _cadastroalunoService.GetCadastroAlunos();
        return Ok(cadastroaluno);
        }
        catch{
         return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter aluno");   
        }
    }
    
    [HttpGet("AlunoPorNome")]
  public async Task <ActionResult<IAsyncEnumerable<CadastroAluno>>> GetCadastroAlunoByNome ([From Query] string nomeAluno)
  {   try{
      var cadastroalunos = await _cadastroalunoService.GetCadastroAlunoByNome();
      if (cadastroalunos.Count() == 0)
          return NotFound($"Não existem alunos com o critério {nomeAluno}");
      
      return Ok(cadastroalunos);
  }
    catch{
        return BadRequest("Request inválido");
    }
        }
  
  
  [HttpGet("{id:int}", Name="GetCadastroAluno" )]
  public async Task<ActionResult<CadastroAluno>> GetCadastroAluno(int id)
  {
      try{
        var cadastroaluno = _cadastroalunoService.GetCadastroAluno(id);  
              if (cadastroaluno.Count() == 0)
          return NotFound($"Não existe aluno com id= {id}");
  
           return Ok(cadastroaluno);
 
      }
      catch{
          return BadRequest("Não foi possível capturar o aluno pelo identificador");
      }
  }
  
  
  [HttpPost]
  public async Task<ActionResult> Create (CadastroAluno cadastroaluno)
  {
      try{
        var cadastraraluno = _cadastroalunoService.CreateCadastroAluno(cadastroaluno);  
        
        return CreateAtRoute(nameof(GetCadastroAluno), new {id = cadastroaluno.id}, cadastraraluno);
  

      }
      catch{
          return BadRequest("Não foi possível criar o aluno");
      }
  }
  
  
  [HttpPut("{id:int}")]
  public async Task<ActionResult> Edit (int id,[FromBody] CadastroAluno cadastroaluno)
  {
      try{
          if(cadastroaluno.id == id)
          {
              await _cadastroalunoService.UpdateCadastroAluno(cadastroaluno);
              return Ok($"Aluno com id={id} foi atualizado com sucesso");
          }
          else{
              return BadRequest("Dados inconsistentes");
          }
      } catch{
          return BadRequest("Não foi possível atualizar o aluno");
      }
  }
}
  
    
}
