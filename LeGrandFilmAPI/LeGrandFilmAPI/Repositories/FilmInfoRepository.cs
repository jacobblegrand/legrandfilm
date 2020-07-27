using LeGrandFilmAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

namespace LeGrandFilmAPI.Repositories
{
    public interface IFilmInfoRepository
    {
        Task<List<FilmInfo>> GetInfo(string query);
    }
    public class FilmInfoRepository : IFilmInfoRepository
    {
        static readonly HttpClient client = new HttpClient();
        public async Task<List<FilmInfo>> GetInfo(string query)
        {
            string url = "https://api.themoviedb.org/3/search/movie?api_key=3fd6bbd5c3d38cd9d1ffd94e90eb35ef&language=en-US&query=" + query + "&page=1&include_adult=false";
            HttpResponseMessage response = await client.GetAsync(url);
            SearchResult searchResult = response.Content.ReadAsAsync<SearchResult>().Result;
            //List<FilmInfo> movies = JsonSerializer.Deserialize<List<FilmInfo>>(fullResponse.results);
            //List<string> titles = new List<string>();
            //List<FilmInfo> info = JsonSerializer.Deserialize < FilmInfo >(r.results);
            //foreach(var r in fullResponse.results)
            //{
            //    string t = r.title;
            //    titles.Add(t);
            //}
            return searchResult.results;
        }
    }
}
