using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using QuizNet.Models;

namespace QuizNet.Services
{
    public class QuestionService
    {
        private readonly Dictionary<string, IMongoCollection<Question>> _topics;
        private List<Question> randomQuestions;
        private string currentCollectionName; //Current topic in quiz
        public QuestionService(IQuestionsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _topics = new Dictionary<string, IMongoCollection<Question>>();
            randomQuestions = new List<Question>();

            foreach(string questionCollectionName in settings.QuestionCollectionNames)
            {
                _topics.Add(questionCollectionName, database.GetCollection<Question>(questionCollectionName));
            }
        }

        public List<string> GetCollectionNames()
        {
            List<string> collectionNames = new List<string>();
            foreach(IMongoCollection<Question> topic in _topics.Values)
            {
                collectionNames.Add(topic.CollectionNamespace.CollectionName);
            }
            return collectionNames;
        }

        public Question GetQuestion(string collectionName)
        {
            if(currentCollectionName != collectionName)
            {
                currentCollectionName = collectionName;
                randomQuestions = new List<Question>(_topics[currentCollectionName].Find(question => true).ToList());
            }
            else if(!randomQuestions.Any()) //if list is empty
            {
                randomQuestions = new List<Question>(_topics[currentCollectionName].Find(question => true).ToList());
            }
            if (!randomQuestions.Any())
            {
                return new Question();
            }
            Random rand = new Random();
            var n = rand.Next(0, randomQuestions.Count);

            Question randomQuestion = (Question)randomQuestions[n].Clone();
            randomQuestions.RemoveAt(n);
            return randomQuestion;
        }

        //public Question Get(string id) =>
        //    _topics.Find<Question>(question => question.Id == id).FirstOrDefault();

        //public Question Create(Question question)
        //{
        //    _questions.InsertOne(question);
        //    return question;
        //}

        //public void Update(string id, Question questionIn) =>
        //    _questions.ReplaceOne(question => question.Id == id, questionIn);

        //public void Remove(Question questionIn) =>
        //    _questions.DeleteOne(question => question.Id == questionIn.Id);

        //public void Remove(string id) =>
        //    _questions.DeleteOne(question => question.Id == id);
    }
}
