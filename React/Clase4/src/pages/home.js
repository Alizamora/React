import React, { useState, useEffect, useContext } from 'react';
import Context from '../context';
import SearchBar from '../components/searchBar';
import request from '../request/request';
import CardsContainer from '../components/cardsContainer';

export default (props) => {
	const context = useContext(Context);
	const [cards, setCards] = useState([]);

	function getValue(v) {
		request(v).then(data => {
			setCards(data.cards);
			context.cards = data.cards;
		});
	}

	useEffect(() => {
		getValue();
	}, []);

	return (
		<div>
			<h1>Home Page</h1>
			<SearchBar value={getValue} />
			<CardsContainer cards={cards} />
		</div>
	)
}