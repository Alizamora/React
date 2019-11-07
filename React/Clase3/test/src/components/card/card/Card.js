import React from 'react';
import Title from '../title/Title';
import Image from '../Image/CardImage';
import Description from '../description/description';
import Star from '../../buttons/Star/star';
import './card.css'

export default (props) => {
    return (
        <div className="container">
            <Title title={props.name} />
            <Star favorite={props.favorite} click={props.click} />
            <Image src={props.image ? props.image.original : ''} alt="Imagen de un capitulo" />
            <Description description={props.summary} />
        </div>
    )
}