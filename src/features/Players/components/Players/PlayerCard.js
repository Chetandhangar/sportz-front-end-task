import React from 'react';
import useStyles from './PlayerCardStyles';
import {Card, CardActionArea, CardMedia, Typography, CardContent} from '@material-ui/core'

export const PlayerCard = ({ player}) => {
    const classes = useStyles();
    console.log(player);

    return(
        <React.Fragment>
          <Card className = {classes.root}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image = {`/player-images/${player?.Id}.jpg`}
          title="Player"
          />
          <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
          {player?.PFName}
          </Typography>

          <Typography gutterBottom  variant="body2"  component="p">
            Skill : {player?.SkillDesc}                               
          </Typography>

          <Typography gutterBottom   variant="body2"  component="p">
           Value :  ${player?.Value}                               
          </Typography>

          <Typography gutterBottom   variant="body2"  component="p">
           Next Match:  {`${player?.UpComingMatchesList[0].CCode} vs ${player.UpComingMatchesList[0].VsCCode} `}                            
          </Typography>
          
          </CardContent>
          </CardActionArea>
          </Card>
        </React.Fragment>
       
    )
}