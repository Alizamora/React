import React from 'react'
import API from '../services/service';
import ButtonFavorites from '../components/buttons/ShowFavorites/showFavorites'

export default () => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Favorite Episodes</h1>
            <ButtonFavorites favorites={false} src='/' content= 'Show All Episodes'/>
            <API favorites={true} />
        </div>
    )
}