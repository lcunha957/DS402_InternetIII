using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoEscola_API.Data;
using ProjetoEscola_API.Models;

namespace ProjetoEscola_API.Controllers
{
    [Route("api/[controller]")]
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
            return _context.CadastroAluno.ToList();
        }

        [HttpGet("{CadastroAlunoId}")]
        public ActionResult<List<CadastroAluno>> Get(int CadastroAlunoId)
        {
            try
            {
                var result = _context.CadastroAluno.Find(CadastroAlunoId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados."
                );
            }
        }

        [HttpPost]
        public async Task<ActionResult> post(CadastroAluno model)
        {
            try
            {
                _context.CadastroAluno.Add(model);
                if ((await _context.SaveChangesAsync() == 1))
                {
                    //return Ok();
                    return Created($"/api/cadastroaluno/{model.ra}", model);
                }
            }
            catch
            {
                return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados."
                );
            }
            // retorna BadRequest se não conseguiu incluir
            return BadRequest();
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
                result.al_nomeCurso = dadosCadastroAlunoAlt.al_nomeCurso;

                await _context.SaveChangesAsync();
                return Created($"/api/cadastroaluno/{dadosCadastroAlunoAlt.ra}", dadosCadastroAlunoAlt);
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
                //verifica se existe aluno a ser excluído
                var cadastroaluno = await _context.CadastroAluno.FindAsync(CadastroAlunoId);
                if (cadastroaluno == null)
                { //método do EF
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
