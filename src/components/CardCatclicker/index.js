import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cat from '../assets/images/catclicker.png';

export default function MediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        image={cat}
        height="50%"
        alt="catclicker"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="rgb(187, 89, 159);">
            Catclicker
        </Typography>
        <Typography variant="body2" color="text.secondary" margin="1rem">
          Kittens fall from the sky on-click! A simple clicker game.
        </Typography>
        <Typography variant='caption' color="text.secondary">Contributors: NathanARoss</Typography>
      </CardContent>
      <CardActions >
        <Button size="small" style={{color:"rgb(187, 89, 159)", marginLeft:"2rem"}} href="https://alisson.me/catclicker/">Demo</Button>
        <Button size="small" style={{color:"rgb(187, 89, 159)"}} href="https://github.com/AlissonRoss/catclicker">Github</Button>
      </CardActions>
    </Card>
  );
}