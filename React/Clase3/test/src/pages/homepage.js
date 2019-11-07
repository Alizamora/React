import React from 'react'
import API from '../services/service';
import ButtonFavorites from '../components/buttons/ShowFavorites/showFavorites'

export default () => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}} >Home Episodes</h1>
            <ButtonFavorites favorites={false} src='/favoritos'  content= 'Show Favorites'/>
            <API favorites={false} />
        </div>
    )
}