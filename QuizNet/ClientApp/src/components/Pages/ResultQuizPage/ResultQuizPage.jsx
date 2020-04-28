import * as React from 'react';

import s from './ResultQuizPage.module.css'
import { NavLink } from 'reactstrap';

class ResultQuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { topics: [] };

    }

    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ topics: data });
        }).bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className={s.resultQuizBox}>
                <h1 className = {s.header}>QuizResult</h1>
                <h3>TotalQuestions: <span className = {s.totalQuestions}>9</span></h3>
                <h3>Attempt: <span className = {s.totalAttempt}>8</span></h3>
                <h3>Correct: <span className = {s.totalCorrect}>3</span></h3>
                <h3>Wrong: <span className = {s.totalWrong}>5</span></h3>
                <h3>Percentage: <span className={s.Percentage}>33.33%</span></h3>
                <NavLink to="/"><button type="button" className={`${s.btn} ${s.startAgainBtn}`}>StartAgain</button></NavLink>
                <NavLink to={`${window.location.pathname.replace("/resultPage", "")}`}><button type="button" className={`${s.btn} ${s.goHomeBtn}`}>Go home</button></NavLink></div>
        )
    }
}


export default ResultQuizPage;