import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css';

export default (props) => {
    return (
        <NavLink to={`/showCard/${props.id}`}>
            <button className='buttonCard' onClick={props.click}>
                <img src={props.imageUrl} alt={props.name} />
            </button>
        </NavLink>
    )
}