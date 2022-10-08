using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoEscola_API.Data;
using ProjetoEscola_API.Models;


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
        public async Task<ActionResult> post([FromForm]CadastroAluno model, CadastroAluno dados)
        {
            
                if (_context.CadastroAluno is not null){
                      _context.CadastroAluno.Add(model);
                if ((await _context.SaveChangesAsync() == 1))
                {


                   model.ra = dados.ra;
                   model.nomeAluno = dados.nomeAluno;
                   model.al_codCurso = dados.al_codCurso;
                   model.imageFile = Image(dados.imageFile); 
                   model.imageSrc = dados.imageSrc;
                   model.nomeFoto =  await SaveImage(dados.imageFile) = dados.nomeFoto;

                   }
                
                else{ 
                      return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Erro no salvamento dos dados."
                );
                }

            return Created($"/api/cadastroaluno/CadastroAlunoId/{model.ra}", dados);
                
                } 
            
                 
                 else {
                    return this.StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "Falha no acesso ao banco de dados, sem dados de retorno."
                );
                 }
          
            }
        
        [HttpPut("{CadastroAlunoId}")]
        public async Task<IActionResult> put([FromForm]int CadastroAlunoId, CadastroAluno dadosCadastroAlunoAlt)
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
                result.imageFile = Image(dadosCadastroAlunoAlt.imageFile);
                result.imageSrc = dadosCadastroAlunoAlt.imageSrc;
                result.nomeFoto =  await SaveImage(dadosCadastroAlunoAlt.imageFile) = dadosCadastroAluno.nomeFoto;

        
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
        
        // Para evitar de ter imagens duplicadas no banco de dados...
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile, HttpContext httpContext)
        {
            string nomeFoto = new String(Path.GetFileWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ','-');
            nomeFoto = nomeFoto+DateTime.Now.ToString("yymmssfff")+Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", nomeFoto);
            using(var fileStream = new FileStream(imagePath, FileModel.Create))
                  {
                       await imageFile.CopyToAsync(fileStream);
                      
                  }
                  return nomeFoto;  
            
        }
    }
}

