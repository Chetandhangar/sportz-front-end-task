import React from 'react';
import useStyles from './PlayerCardStyles';
import {Card, CardActionArea, CardMedia, Typography, CardContent} from '@material-ui/core'
import {getLocalDataTime} from '../../../../common/utils/utils';

export const PlayerCard = ({ player}) => {
    const classes = useStyles();
    console.log(player)
    
    function getFixture(CCode , VsCCode){
        if(CCode === "" && VsCCode === ""){
          return "Information Not Available"
        }else{
          return `${CCode} vs ${VsCCode}`
        }
    }

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
           Next Match:  {getFixture(player?.UpComingMatchesList[0].CCode,player.UpComingMatchesList[0].VsCCode)}   
           {",   "} {getLocalDataTime(player?.UpComingMatchesList[0].MDate)}                         
          </Typography>
          
          </CardContent>
          </CardActionArea>
          </Card>
        </React.Fragment>
       
    )
}