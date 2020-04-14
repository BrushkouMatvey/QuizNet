import React from 'react';
import s from "./TopicItem.module.css";
import { NavLink } from "react-router-dom";


export const TopicItem = (props) => {
    return (
        <button className={s.item} style={{ backgroundImage: `linear-gradient( ${props.color1},${props.color2} )` }}><NavLink to={props.link}>{props.text}</NavLink> </button>
    );
};