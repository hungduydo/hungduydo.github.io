import React from 'react';

export const SkillBar = (props) => {
    return <li className="skill__item">
        <em>{props.name}</em>
        <span style={{ width: `${props.level * 20}%` }}></span>
    </li>;
}