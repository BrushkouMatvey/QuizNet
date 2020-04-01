import * as React from 'react';

import { Button } from '../Button/Button';
import s from './QuizPage.module.css'

const QuizPage = () => {
    return (
        <div className = {s.quizPage}>
            <div>
                <Button text="Single game" link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Game with friends" link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Settings" link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Game with friends" link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Settings"  link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Settings" link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Game with friends" link = "/QuizTopics" style="default" />
            </div>
            <div>
                <Button text="Settings" link = "/QuizTopics" style="default" />
            </div>
        </div>
    )
}

export default QuizPage;