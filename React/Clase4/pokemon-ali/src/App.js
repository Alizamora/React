import React, {useState} from 'react';
import SearchBar from './components/searchBar';
import request from './request/request';
import CardsContainer from './components/cardsContainer';
import Card from './components/card';


export default () => {
    const [cards, setCards] = useState([]);

    function getValue(v) {
        request(v).then(data => {
            setCards(data.cards);
        });
    }

    return (
        <div>
            <SearchBar value={getValue}/>
            <CardsContainer cards={cards}/>
        </div>
    )
}