using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoEscola_API.Data;
using ProjetoEscola_API.Models;
using System.IO; 


namespace ProjetoEscola_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CadastroAlunoController : ControllerBase
    {
        private readonly EscolaContext _context;

        public CadastroAlunoController(EscolaContext context)
        { // construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<CadastroAluno>> GetAll()
         {  
            if(_context.CadastroAluno is not null){

            return _context.CadastroAluno.ToList();
            }
            else{
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados");
            }
        }

        [ActionName("CadastroAlunoId")] 
        [HttpGet("{CadastroAlunoId}")]
        public ActionResult<List<CadastroAluno>> GetId(int CadastroAlunoId)
        {
            
                if(_context.CadastroAluno is not null){
                     var result = _context.CadastroAluno.Find(CadastroAlunoId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            else{
                 return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados."
                );
            }
            
            }
        
        [ActionName("CadastroAlunoNome")]
        [HttpGet("{CadastroAlunoNome}")]
        public ActionResult<List<CadastroAluno>> GetAlunoNome(string CadastroAlunoNome)
        {
            if(_context.CadastroAluno is not null){
                var result = _context.CadastroAluno.Where(a =>a.nomeAluno == CadastroAlunoNome);
                if(result == null){
                    return NotFound();
                }
                return Ok(result);
            }
            else {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha de acesso ao banco de dados.");
            }
        }

        [ActionName("CadastroAlunoCodigoCurso")]
        [HttpGet("{CadastroAlunoCodigoCurso}")]
        public ActionResult<List<CadastroAluno>> GetAlunoCodigoCurso(int CadastroAlunoCodigoCurso) {
             
             if(_context.CadastroAluno is not null){
                var result = _context.CadastroAluno.Where(a=>a.al_codCurso == CadastroAlunoCodigoCurso);
                if(result == null){
                    return NotFound();
                } 
                return Ok(result);
             }
             else {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha de acesso ao banco de dados.");

             }  
        }

        [HttpPost]
       
        public async Task<ActionResult> post(CadastroAluno model)
        {
            

              
                            
                if (_context.CadastroAluno is not null){
                      _context.CadastroAluno.Add(model);
                if ((await _context.SaveChangesAsync() == 1))
                {
                  
                  var cadastroaluno = new CadastroAluno();
                  cadastroaluno.ra = model.ra;
                  cadastroaluno.nomeAluno = model.nomeAluno;
                  cadastroaluno.al_codCurso = model.al_codCurso;
                  
                await _context.SaveChangesAsync();
                      return Created($"/api/cadastroaluno/CadastroAlunoId/{model.ra}", model);
                      
                
                }
                
                 else{ 
                      return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Erro no salvamento dos dados."
                );
                   
               }   
                  
                     
                   }
                
                else {
                    return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados, sem dados de retorno."
                );
                }
                 
                
          
            }
        
        [HttpPut("{CadastroAlunoId}")]
        public async Task<IActionResult> put(int CadastroAlunoId, CadastroAluno dadosCadastroAlunoAlt)
        {
            try
            {
                //verifica se existe aluno a ser alterado
                var result = await _context.CadastroAluno.FindAsync(CadastroAlunoId);
                if (CadastroAlunoId != result.id)
                {
                    return BadRequest();
                }
                result.ra = dadosCadastroAlunoAlt.ra;
                result.nomeAluno = dadosCadastroAlunoAlt.nomeAluno;
                result.al_codCurso = dadosCadastroAlunoAlt.al_codCurso;

            
        
                await _context.SaveChangesAsync();
                return Created($"/api/cadastroaluno/CadastroAlunoId/{result.id}", dadosCadastroAlunoAlt);
            
            }
            catch
            {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados."
                );
            }
        
        }

        [HttpDelete("{AlunoId}")]
        public async Task<ActionResult> delete(int CadastroAlunoId)
        {
            try
            {
                //verifica se existe aluno a ser exclu??do
                var cadastroaluno = await _context.CadastroAluno.FindAsync(CadastroAlunoId);
                if (cadastroaluno == null)
                { //m??todo do EF
                    return NotFound();
                }
                _context.Remove(cadastroaluno);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados."
                );
            }
        }
        
   
    }
}

