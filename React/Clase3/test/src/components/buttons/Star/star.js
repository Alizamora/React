import React from 'react';
import Svg from '../../svg'
import './star.css';

export default (props)=> 
<button onClick={props.click} className={`buttonStar ${props.favorite ? 'favorite' : ''}`}>
    <Svg className='star' src='./images/star.svg' />
</button>