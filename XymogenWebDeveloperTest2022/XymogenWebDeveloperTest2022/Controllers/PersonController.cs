using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using XymogenWebDeveloperTest2022.Models;
using XymogenWebDeveloperTest2022.Services;

namespace XymogenWebDeveloperTest2022.Controllers
{
    public class PersonController : Controller
    {
        private JsonPersonService _personService;
        public PersonController(JsonPersonService personService) 
            => _personService = personService;

        public List<Person> Persons = new List<Person>();
        public IActionResult Index()
        { 
            return View();
        }
        [HttpPost]
        public IActionResult AddPerson(Person person)
        {
            Persons.Add(person);

            return View(Persons);
        }
        [HttpGet]
        public IActionResult PersonsList()
        {
            var persons = _personService.GetPersons(); ;
            return View(persons);
        }
    }
}
