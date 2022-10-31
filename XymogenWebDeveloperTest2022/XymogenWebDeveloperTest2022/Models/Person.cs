using System.Text.Json;

namespace XymogenWebDeveloperTest2022.Models
{
    public class Person
    {
        public string Name { get; set; }
        public Contact Contact { get; set; }

        public override string ToString() => JsonSerializer.Serialize<Person>(this);
    }

    public class Contact
    {
        public string PhoneNumber { get; set; }
    }
}
