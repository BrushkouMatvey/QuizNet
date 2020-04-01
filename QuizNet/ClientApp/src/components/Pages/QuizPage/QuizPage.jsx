import * as React from 'react';

import { Button } from '../Button/Button';
import s from './QuizPage.module.css'





class QuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionName: "",
            answers: [],
            rightAnswer: "",
            color: ''
        };
        this.loadData = this.loadData.bind(this);

    }

    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.match.url, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ questionName: data.questionName, answers: data.answers, rightAnswer: data.rightAnswer });
        }).bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }


    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    onRadioChange = (e) => {
        this.setState({
            color: e.target.value
        });
    }

    render() {
        return <div className={s.quizPage}>
            <div className={s.question}>{this.state.questionName}</div>

            <form className={s.form} onSubmit={this.onSubmit}>
                <div>
                    <label className={s.label}>
                        <input className={s.input}
                            type="radio"
                            value="answer1"
                            checked={this.state.color === "answer1"}
                            onChange={this.onRadioChange}
                        />
                        <span className={s.checkmark}>{this.state.answers[0]}</span>
                    </label>
                </div>
                <div><label className={s.label}>
                    <input className={s.input}
                        type="radio"
                        value="answer2"
                        checked={this.state.color === "answer2"}
                        onChange={this.onRadioChange}
                    />
                    <span className={s.checkmark}>{this.state.answers[1]}</span>
                </label></div>
                <div>
                    <label className={s.label}>
                    <input className={s.input}
                        type="radio"
                        value="answer3"
                        checked={this.state.color === "answer3"}
                        onChange={this.onRadioChange}
                    />
                    <span className={s.checkmark}>{this.state.answers[2]}</span>
                </label>
                </div>

                <div>
                    <label className={s.label}>
                        <input className={s.input}
                            type="radio"
                            value="answer4"
                            checked={this.state.color === "answer4"}
                            onChange={this.onRadioChange}
                        />
                        <span className={s.checkmark}>{this.state.answers[3]}</span>
                    </label>
                </div>

            </form>

            <button className={s.nextButton} onClick={this.loadData}>Next</button>

        </div>
    }
}

export default QuizPage;