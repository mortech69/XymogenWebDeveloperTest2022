using System.Text.Json;
using XymogenWebDeveloperTest2022.Models;

namespace XymogenWebDeveloperTest2022.Services
{
    public class JsonPersonService
    {
        public JsonPersonService(IWebHostEnvironment webHostEnvironment) 
            => WebHostEnvironment = webHostEnvironment;
        public IWebHostEnvironment WebHostEnvironment { get; }
        private string JsonFileName 
            => Path.Combine(WebHostEnvironment.WebRootPath, "data", "persons.json");
        public IEnumerable<Person> GetPersons()
        {
            using var jsonFileReader = File.OpenText(JsonFileName);
            return JsonSerializer.Deserialize<Person[]>(jsonFileReader.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
         }  
    }
}
