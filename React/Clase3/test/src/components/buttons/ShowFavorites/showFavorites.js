import React from 'react';
import { Link } from 'react-router-dom';
import './showFavorites.css';

export default (props) => <Link to={props.src}>
    <button className="buttonFavorites">{props.content}</button>
    </Link>