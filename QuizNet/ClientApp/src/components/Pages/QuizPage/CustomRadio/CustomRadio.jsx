import React from 'react';
import s from "./CustomRadio.module.css";
import { NavLink } from "react-router-dom";




const RadioButton = (props) => {
    return (
        <div className={s.RadioButton}>
            <input id={props.id} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;