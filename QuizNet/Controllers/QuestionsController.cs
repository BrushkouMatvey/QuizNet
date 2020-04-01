using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using QuizNet.Models;
using QuizNet.Services;

namespace QuizNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionService _questionService;

        public QuestionsController(QuestionService questionService)
        {
            _questionService = questionService;
        }

        [HttpGet]
        public ActionResult<List<string>> GetTopicsNames()
        {
            return _questionService.GetCollectionNames();
        }

        [HttpGet("science")]

        public ActionResult<Question> GetQuestionScience()
        {
            return _questionService.GetQuestion("science");
        }
        
        [HttpGet("history")]
        public ActionResult<Question> GetQuestionHistory()
        {
            return _questionService.GetQuestion("history");
        }

        [HttpGet("literature")]
        public ActionResult<Question> GetQuestionLiterature()
        {
            return _questionService.GetQuestion("literature");
        }

        //[HttpGet("{id:length(24)}", Name = "GetQuestion")]
        //public ActionResult<Question> Get(string id)
        //{
        //    var question = _questionService.Get(id);

        //    if(question == null)
        //    {
        //        return NotFound();
        //    }

        //    return question;
        //}

        //[HttpPost]
        //public ActionResult<Question> Create(Question question)
        //{
        //    _questionService.Create(question);

        //    return CreatedAtRoute("GetBook", new { id = question.Id.ToString() }, question);
        //}

        //[HttpPut("{id:length(24)}")]
        //public IActionResult Update(string id, Question questionIn)
        //{
        //    var question = _questionService.Get(id);

        //    if(question == null)
        //    {
        //        return NotFound();
        //    }

        //    _questionService.Update(id, questionIn);

        //    return NoContent();
        //}

        //[HttpDelete("{id:length(24)}")]
        //public IActionResult Delete(string id)
        //{
        //    var question = _questionService.Get(id);

        //    if(question == null)
        //    {
        //        return NotFound();
        //    }

        //    _questionService.Remove(question.Id);

        //    return NoContent();
        //}
    }
}
