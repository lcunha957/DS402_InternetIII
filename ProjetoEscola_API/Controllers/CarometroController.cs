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
    public class CarometroController : ControllerBase
    {
        private readonly EscolaContext _context;

        public CarometroController(EscolaContext context)
        { // construtor
            _context = context;
        }

       [HttpGet]
        public ActionResult<List<Carometro>> GetAll()
        {
            return _context.Carometro.ToList();
        }
    }