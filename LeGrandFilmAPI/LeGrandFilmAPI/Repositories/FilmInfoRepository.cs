using LeGrandFilmAPI.Models;
using System;
using Dapper;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Data.SqlClient;

namespace LeGrandFilmAPI.Repositories
{
    public interface IFilmInfoRepository
    {
        Task<string> GetInfo(string query);
        string InsertFilm(string film);
        string DeleteFilm(string film);
    }
    public class FilmInfoRepository : IFilmInfoRepository
    {
        static readonly string _connectionString = "Server=tcp:jacobblegrand.database.windows.net,1433;Initial Catalog=LeGrandFilm;Persist Security Info=False;User ID=jacobblegrand;Password=j@deLime96;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
        static readonly HttpClient client = new HttpClient();
        public async Task<string> GetInfo(string query)
        {
            string url = "https://api.themoviedb.org/3/search/movie?api_key=3fd6bbd5c3d38cd9d1ffd94e90eb35ef&language=en-US&query=" + query + "&page=1&include_adult=false";
            HttpResponseMessage response = await client.GetAsync(url);
            SearchResult searchResult = response.Content.ReadAsAsync<SearchResult>().Result;

            string jsonString = JsonConvert.SerializeObject(searchResult.results);
            
            return jsonString;
        }

        public string InsertFilm(string film)
        {
            FilmInfo filmObject = JsonConvert.DeserializeObject<FilmInfo>(film);
            string output = "";
            var parameters = new { Id = filmObject.id, Title = filmObject.title, Overview = filmObject.overview, PosterPath = filmObject.poster_path, ReleaseDate = filmObject.release_date, GenreIds = String.Join(',', filmObject.genre_ids), BackdropPath = filmObject.backdrop_path, VoteAverage = filmObject.vote_average };
            string query = "INSERT INTO MOVIES (Id, Title, Overview, PosterPath, ReleaseDate, GenreIds, BackdropPath, VoteAverage) VALUES (@Id, @Title, @Overview, @PosterPath, @ReleaseDate, @GenreIds, @BackdropPath, @VoteAverage)";

            SqlConnection sqlConnection = new SqlConnection(_connectionString);

            using (var db = sqlConnection)
            {
                db.Open();
                output = db.Query<string>(query, parameters).FirstOrDefault();
            }
            return output;
        }

        public string DeleteFilm(string film)
        {
            FilmInfo filmObject = JsonConvert.DeserializeObject<FilmInfo>(film);
            string output = "";
            var parameters = new { Id = filmObject.id };
            string query = "DELETE FROM MOVIES WHERE ID = @Id";

            SqlConnection sqlConnection = new SqlConnection(_connectionString);

            using (var db = sqlConnection)
            {
                db.Open();
                output = db.Query<string>(query, parameters).FirstOrDefault();
            }
            return output;
        }
    }
}
