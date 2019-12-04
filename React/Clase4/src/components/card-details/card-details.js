import React from 'react';
import './card-details.css';

export default (props) => {
	return (
		<div className='container_card'>
			<img src={props.imageUrl} alt='' className='img_card' />
			<div>
				<h2>{props.name}</h2>
				<p>{props.text}</p>
				{
					props.attacks && props.attacks.length ?
						<>
							<h3>Attacks</h3>
							{
								props.attacks.map(a =>
									<>
										<h4>{a.name}</h4>
										<p>{a.text}</p>
										<span>{a.damage}</span>
									</>)
							}

						</>
						: null
				}
			</div>
		</div>
	)
}