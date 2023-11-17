import * as React from 'react';
import { AccordionDetails, Paper, CardMedia, Typography, CardActions, Button, CardContent} from '@material-ui/core';

export default function AccordionCard(itemData) {
   
    return (
        
        <AccordionDetails className='Card-style'>
        {itemData.map((item, i) => (
            <Paper variant="outlined" key={i}>
            <a href={item.projectLink}><CardMedia
                component="img"
                image={item.img}
                height="50%"
                alt={item.imgAlt}
                
            /></a>
            <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="rgb(187, 89, 159);">
                {item.projectName}
            </Typography>
            <Typography variant='caption' color="text.secondary"> 
                {item.description}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{color:"rgb(187, 89, 159)",marginLeft:"2rem"}} href={item.projectLink}>DEMO</Button>
                <Button size="small" style={{color:"rgb(187, 89, 159)"}} href={item.githubLink}>Github</Button>
            </CardActions>
            </Paper> 
        ))}
        </AccordionDetails>
    );
}