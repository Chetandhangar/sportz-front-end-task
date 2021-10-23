import React, { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPlayersData} from '../playerSlice';
import {PlayerCard} from '../components/Players/PlayerCard';
import useStyles from './playerStyles'
import {Container, Grid, TextField} from '@material-ui/core'

export const  PlayersListing = () => {
    
    const[searchTerm , setSearchTerm] = useState("");

    const {players} = useSelector((state) => state.player);
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
                <div className={classes.searchField}>
                  <TextField className={classes.searchTextField} id="standard-basic"
                   label="Search Players By Name or Team Name"  
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
            <Grid container spacing={3}>
               {sortData?.filter((player) => {
                   if(searchTerm === ""){
                       return player;
                   }else if(player?.PFName.toLowerCase().includes(searchTerm.toLowerCase())){
                       return player;
                   }else if(player?.TName.toLowerCase().includes(searchTerm.toLowerCase())){
                       return player;
                   }else return null;
               }).map((player) =>(
                 <Grid item key={player?.Id} xs={12} sm={12} md={4}>
                     <PlayerCard player={player}/>
                 </Grid>
               ))}  
            </Grid>
            </Container>
        </div>
    )
} 

