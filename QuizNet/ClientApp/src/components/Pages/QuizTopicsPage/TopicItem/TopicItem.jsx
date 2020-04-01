import React from 'react';
import s from "./TopicItem.module.css";
import { NavLink } from "react-router-dom";


export const TopicItem = (props) => {
    return (
        <div className = {s.item}>{props.text}</div>
    );
};