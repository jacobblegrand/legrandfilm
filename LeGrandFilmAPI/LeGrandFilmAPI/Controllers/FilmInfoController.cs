using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeGrandFilmAPI.Models;
using LeGrandFilmAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LeGrandFilmAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmInfoController : ControllerBase
    {

        private readonly ILogger<FilmInfoController> _logger;
        private readonly IFilmInfoRepository _filmInfoRepository;

        public FilmInfoController(ILogger<FilmInfoController> logger, IFilmInfoRepository filmInfoRepository)
        {
            _filmInfoRepository = filmInfoRepository;
            _logger = logger;
        }

        [HttpGet]
        [Route("GetInfo/{query}")]
        public List<FilmInfo> Get(string query)
        {
            var x = _filmInfoRepository.GetInfo(query).Result;
            return x;
        }
    }
}
