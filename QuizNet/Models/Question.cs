using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace QuizNet.Models
{
    public class Question : ICloneable
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("question")]
        public string QuestionName { get; set; }

        [BsonElement("answers")]
        public List<string> Answers { get; set; }

        [BsonElement("rightAnswer")]
        [BsonRepresentation(BsonType.String)]
        public char RightAnswer { get; set; }

        public object Clone()
        {
            return this.MemberwiseClone();
        }
    }
}
