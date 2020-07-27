using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeGrandFilmAPI.Models
{
    public class FilmInfo
    {
        public string? poster_path;
        public bool adult;
        public string overview;
        public string release_date;
        public int[] genre_ids;
        public int id;
        public string original_title;
        public string original_language;
        public string title;
        public string? backdrop_path;
        public double popularity;
        public int vote_count;
        public bool video;
        public double vote_average;
    }
}
