import React from 'react';
import './card.css';

export default (props) => {
    return (
        <button className='buttonCard'>
            <img src={props.imageUrl} alt={props.name}/>
        </button>
    )
}