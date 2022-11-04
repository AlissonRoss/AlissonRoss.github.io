import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cat from '../assets/images/catscratch.png';

export default function MediaCard() {
  return (
    <Card style={{marginBottom:"2rem"}}>
      <CardMedia
        component="img"
        image={cat}
        height="50%"
        alt="Tuxedo"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="rgb(187, 89, 159);">
            Catscratch 
        </Typography>
        <Typography variant="body2" color="text.secondary" margin="1rem">
          The user starts off with 50 credits. They will need to scratch the four boxes to reveal images of Tux, the cat.
          Two duplicates will add +10 credits. 
          You can try again for -10 credits.
        </Typography>
        <Typography variant='caption' color="text.secondary">Contributors: NathanARoss</Typography>
      </CardContent>
      <CardActions >
        <Button size="small" style={{color:"rgb(187, 89, 159)",marginLeft:"2rem"}} href="https://alisson.me/catscratch/">Demo</Button>
        <Button size="small" style={{color:"rgb(187, 89, 159)"}} href="https://github.com/AlissonRoss/catscratch">Github</Button>
      </CardActions>
    </Card>
  );
}