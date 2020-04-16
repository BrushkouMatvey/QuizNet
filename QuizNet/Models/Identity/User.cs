using System;
using AspNetCore.Identity.Mongo.Model;

namespace QuizNet.Models.Identity
{
    //Add any custom field for a user
    public class User : MongoUser
    {
        public string Name { get; set; }

        //public string LastName { get; set; }

        //public DateTime Birthdate { get; set; }

        //public string Country { get; set; }

        //public string State { get; set; }

        //public string City { get; set; }
    }
}