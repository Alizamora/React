import React, {useContext} from 'react';
import Context from '../context';
import { NavLink } from 'react-router-dom';
import CardDetails from '../components/card-details/card-details';

export default (props) => {
	const context = useContext(Context);
	const urlId = props.match.params.id;
	const card = context.cards.find(o => o.id == urlId);

	return (
		<div>
			<h1>Show Cards Page</h1>
			<NavLink to={'/'}>
				<button>
					<img src='./exit.svg' alt='Boton de salida'/>
				</button>
			</NavLink>
			<CardDetails {...card}/>
		</div>
	)
} 