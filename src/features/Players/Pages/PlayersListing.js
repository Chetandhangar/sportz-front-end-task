import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPlayersData} from '../playerSlice'
export const  PlayersListing = () => {
    const {players, teams} = useSelector((state) => state.player);
    console.log(players,'from plauyers state')
    console.log(teams,'from state teams')
    const  dispatch = useDispatch();

    useEffect(() =>{
       dispatch(fetchPlayersData())
    },[dispatch])

    return(
        <div>
            Players Listing
        </div>
    )
} 