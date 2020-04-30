import * as React from 'react';

import { Button } from '../Button/Button';
import s from './QuizPage.module.css'
import Option from './Option/Option';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';




class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.btn = []
        //this.myRef2 = React.createRef();
        //this.myRef3 = React.createRef();
        ////this.myRef4 = React.createRef();
        //this.refs = [this.myRef1, this.myRef2, this.myRef3, this.myRef4]
        this.state = {
            questionName: "",
            answers: [],
            rightAnswer: "",
            answer: '',
            questionIndex: 1,
            alreadyAnswered: null,
            correctAnswers: 0,
            wrongAnswers: 0, 
            score: 0, 
            remainingTime: 0,
            interval: 0
        };
        this.loadData = this.loadData.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        //this.submitButtonClick = this.submitButtonClick.bind(this);
    }

    firstloadData(e) {

        var xhr = new XMLHttpRequest();
        console.log(this.props.match.url);
        xhr.open("get", this.props.match.url, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ questionName: data.questionName, answers: data.answers, rightAnswer: data.rightAnswer, isCorrect: false });
        }).bind(this);
        xhr.send();

    }

    startTimer(e) {
        let timeLimit = 15;
        this.setState({ remainingTime: timeLimit })
        this.setState({
            interval: setInterval(() => {
                timeLimit--;
                if (timeLimit < 6) {
                    let classes = `${s.remainingTime}`;
                    let els = document.getElementsByClassName(`${s.remainingTime}`);
                    console.log(els);
                    els[0].classList.add(`${s.lessTime}`);
                }
                if (timeLimit == 0) {
                    clearInterval(this.state.interval);  
                    this.timeIsUp()
                }
                //console.log(timeLimit);
                this.setState({ remainingTime: timeLimit })
            }, 1000) }) 
    }

    stopTimer() {
        clearInterval(this.state.interval);
    }

    loadData = (e) => {
        let els = document.getElementsByClassName(`${s.remainingTime}`);
        console.log(els);
        els[0].classList.remove(`${s.lessTime}`);
        this.startTimer();
        this.hideNextQuestionBtn();
        this.enableOptions();
        if (e.target.id == "1") {
            this.setState({ questionIndex: this.state.questionIndex + 1 });
        }
        else this.setState({ questionIndex: this.state.questionIndex - 1 });

        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.match.url, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ questionName: data.questionName, answers: data.answers, rightAnswer: data.rightAnswer, isCorrect: false });
        }).bind(this);
        xhr.send();

        
    }
    enableOptions = (e) => {
        let classes = `${s.option}`;
        let els = document.getElementsByClassName(`${s.option}`);

        for (let i = 0; i < els.length; i++) {
            els[i].classList.remove(`${s.alreadyAnswered}`);
        }

        let corr = document.getElementsByClassName(`${s.correct}`);
        console.log(corr);
        for (let i = 0; i < corr.length; i++) {
            console.log(corr[i]);
            corr[i].classList.remove(`${s.correct}`);
        }
        let wrong = document.getElementsByClassName(`${s.wrong}`);
        console.log(wrong);

        for (let i = 0; i < wrong.length; i++) {
            console.log(wrong[i]);
            wrong[i].classList.remove(`${s.wrong}`);
        }

        let corShow = document.getElementsByClassName(`${s.showCorrect}`);
        console.log(corShow);
        for (let i = 0; i < corShow.length; i++) {
            console.log(corShow[i]);
            corShow[i].classList.remove(`${s.showCorrect}`);
        }

        let timesUpElem = document.getElementsByClassName(`${s.timesUp}`);
        timesUpElem[0].classList.remove(`${s.show}`);
    };

    disableOptions = (e) => {
        let classes = `${s.option}`;
        let els = document.getElementsByClassName(`${s.option}`);
        console.log(els);
        
        for (let i = 0; i < els.length; i++) {
            console.log(els[i]);
            els[i].classList.add(`${s.alreadyAnswered}`);
        }
    };

    showNextQuestionBtn = (e) => {
        let classes = `${s.nextButton}`;
        let els = document.getElementsByClassName(`${s.nextButton}`);
        console.log(els);
        els[0].classList.add(`${s.show}`)
        console.log(els);
    };
    showSubmitQuestionBtn = (e) => {
        let classes = `${s.submitButton}`;
        let els = document.getElementsByClassName(`${s.submitButton}`);
        console.log(els);
        els[0].classList.add(`${s.show}`)
        console.log(els);
    };
    hideNextQuestionBtn = (e) => {
        let classes = `${s.nextButton}`;
        let els = document.getElementsByClassName(`${s.nextButton}`);
        console.log(els);
        els[0].classList.remove(`${s.show}`)
        console.log(els);
    };

    timeIsUp(e) {
        let timesUpElem = document.getElementsByClassName(`${s.timesUp}`);
        timesUpElem[0].classList.add(`${s.show}`);        
        let els = document.getElementsByClassName(`${s.option}`);
        for (let i = 0; i < els.length; i++) {
            if (els[i].id == this.state.rightAnswer)
                els[i].classList.add(`${s.showCorrect}`);
        } 
        this.disableOptions();
        this.showNextQuestionBtn();
    }

    fetchUsers = (e) => {

        console.log(e.target.id);
        console.log(this.state.rightAnswer);
        if (e.target.id == this.state.rightAnswer) {
            e.target.classList.add(`${s.correct}`);
            this.setState({ correctAnswers: this.state.correctAnswers + 1, score: this.state.score + 1 })
            console.log("correct answers" + this.state.correctAnswers)
        }
        else
        {
            e.target.classList.add(`${s.wrong}`);
            this.setState({ wrongAnswers: this.state.wrongAnswers = 1 });
            let els = document.getElementsByClassName(`${s.option}`);
            for (let i = 0; i < els.length; i++) {
                if (els[i].id == this.state.rightAnswer)
                    els[i].classList.add(`${s.showCorrect}`);
            }
        }
        this.disableOptions(e);
        if (this.state.questionIndex < 20)
            this.showNextQuestionBtn();
        else this.showSubmitQuestionBtn();
        this.stopTimer();
  
    };
    componentDidMount() {
        this.startTimer();
        this.firstloadData();
    }


    render() {


        return <div className={s.quizPage}>
            <div className={s.stats}>
                <div className={s.quizTime}> 
                    <div className={s.remainingTime}>{this.state.remainingTime} </div>
                    <div className={s.timesUp}>Time's up </div>
                </div>

                <div className={s.scoreBoard}>
                    <span className={s.scoreText}>Score:</span>
                    <span className={s.correctAnswers}>{this.state.score}</span>
                </div>
            </div>

            <div className={s.questionBox}>
                <div className={s.currentQuestionNum}>{this.state.questionIndex}/20</div>
                <div className={s.questionText}>{this.state.questionName}</div>
            </div>

            <div className={s.optionBox}>
                <button
                    ref={this.myRef}
                    className={`${s.option} `}
                    id="а"
                    onClick={this.fetchUsers}>
                    {this.state.answers[0]}
                </button>
                <button
                    className={`${s.option} `}
                    id="б"
                    onClick={this.fetchUsers}>
                    {this.state.answers[1]}
                </button>
                <button
                    className={`${s.option} `}
                    id="в"
                    onClick={this.fetchUsers}>
                    {this.state.answers[2]}
                </button>
                <button
                    className={`${s.option} `}
                    id="г"
                    onClick={this.fetchUsers}>
                    {this.state.answers[3]}
                </button>
               
            </div>


            <div className={s.nextQuestion}>
                <button className={s.previousButton} id="0" onClick={this.loadData}>Previous</button>
                {this.state.questionIndex < 20 && < button className={`${s.nextButton}`} id="1" onClick={this.loadData}>Next</button>}
                {this.state.questionIndex >= 20 && < button onClick={this.submitButtonClick} className={s.submitButton} id="1">Submit</button>}

            </div>
            </div>
            

       
    }
}

export default QuizPage;

