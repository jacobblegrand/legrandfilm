using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeGrandFilmAPI.Models
{
    public class SearchResult
    {
        public int page;
        public List<FilmInfo> results;
        public int total_results;
        public int total_pages;
    }
}
