import * as React from 'react';

import { Button } from '../Button/Button';
import s from './QuizPage.module.css'





class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            questionName: "",
            answers: [],
            rightAnswer: ""
        };

    }

    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ id: data.id, questionName: data.questionName, answers: data.answers, rightAnswer: data.rightAnswer });
        }).bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        return <div className={s.quizTopicsPage}>
            <div>{this.state.id} {this.state.questionName}</div>
            <div>{this.state.answers[0]}</div>
            <div>{this.state.answers[1]}</div>
            <div>{this.state.answers[2]}</div>
            <div>{this.state.answers[3]}</div>
            <button>Next</button>


            {/* <div>1 Вопрос 1 ывлоравылоарыволарывлоралывраылдрмдывщгарфдшырмфыдварылварфдлыварфлдывоа</div>
            <div></div>
            <div>ответ 2</div>
            <div>ответ 3</div>
            <div>ответ 4</div>
            <button>next</button> */}
        </div>
    }
}

export default QuizPage;