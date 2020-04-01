import React from 'react';
import s from "./TopicItem.module.css";
import { NavLink } from "react-router-dom";


export const TopicItem = (props) => {
    return (
        <button className = {s.item}><NavLink to={props.link}>{props.text}</NavLink> </button>
    );
};