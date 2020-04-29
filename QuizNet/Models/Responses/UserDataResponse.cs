using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizNet.Models.Responses
{
    public class UserDataResponse
    {
        public int resultCode { get; set; }
        public List<String> messages { get; set; }

        public int id { get; set; }
        public string email { get; set; }
        public string login { get; set; }
        //public string Name { get; set; }

        //public string LastName { get; set; }

        //public string City { get; set; }

        //public string Email { get; set; }
    }
}
