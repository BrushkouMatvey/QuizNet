
using System.Collections.Generic;

namespace QuizNet.Models
{
    public class QuestionsDatabaseSettings : IQuestionsDatabaseSettings
    {
        public List<string> QuestionCollectionNames { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IQuestionsDatabaseSettings
    {
        public List<string> QuestionCollectionNames { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}