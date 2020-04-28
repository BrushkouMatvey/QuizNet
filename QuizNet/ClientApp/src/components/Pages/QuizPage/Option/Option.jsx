import * as React from 'react';

import s from '.././QuizPage.module.css'

const Option = (props) => {
    return (
    <div className={s.option} onClick = {props.check()} id = {props.id}>{props.answer} </div>
    )
}

export default Option;