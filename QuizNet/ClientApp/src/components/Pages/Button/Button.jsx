import React from 'react';
import s from "./Button.module.css";
import { NavLink } from "react-router-dom";


export const Button = (props) => {
    return (

        <NavLink to={props.link}><button className={s.button}> {props.text}</button></NavLink>

    );
};