
using System.Collections.Generic;

namespace QuizNet.Models
{
    public class IdentityDatabaseSettings : IIdentityDatabaseSettings
    {
        public List<string> IdentityCollectionNames { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IIdentityDatabaseSettings
    {
        public List<string> IdentityCollectionNames { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}