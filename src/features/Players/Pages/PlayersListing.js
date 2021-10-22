import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPlayersData} from '../playerSlice';
import {PlayerCard} from '../components/Players/PlayerCard';
import useStyles from './playerStyles'
import {Container, Grid} from '@material-ui/core'

export const  PlayersListing = () => {
    const {players} = useSelector((state) => state.player);
    console.log(players,'from plauyers state')
    const  dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() =>{
       dispatch(fetchPlayersData())
    },[dispatch])

    const sortData = [...players].sort((a,b) => a.Value - b.Value)
    console.log(sortData,'from sortdat')
 

    return(
        <div>
            <Container className={classes.productContainer}>
            <Grid container spacing={3}>
                {sortData?.map((player) =>(
                     <Grid item key={player?.Id} xs={12} sm={12} md={4}>
                         <PlayerCard player={player}/>
                     </Grid>
                ))}
            </Grid>
            </Container>
        </div>
    )
} 