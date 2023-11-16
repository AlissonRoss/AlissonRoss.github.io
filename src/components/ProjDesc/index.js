import AccordionCard from '../AccordionCard/accordionCard';
import { AccordionSummary, AccordionDetails, Box, Accordion, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Paper } from '@mui/material';
import ReactImg from '../assets/images/react.png';
import CardCatScratch from '../CardCatscratch/index.js';
import CardCatClicker from '../CardCatclicker/index.js';
export default function projDesc(){
    return (
    <Box className='Proj-main'> 
        <div className="projects-header">Projects and Guides<br/></div>
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022- 2023 Projects</Typography>
                </AccordionSummary>
                <AccordionCard/>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022-2023 Web Dev Guides</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                    <Paper variant="outlined">
                        <img src={ReactImg} alt="ReactJS" width="90%"/>
                        <br/> <Typography variant='caption' color="text.secondary">The following are links to the Web Dev Guides I have written for workshops</Typography>
                    </Paper>
                    <Button className="Typo" href="https://www.notion.so/Intro-to-ReactJS-Guide-Fall-2022-5978106126f94dfd8ea0597c47177816">2022 Intro to ReactJS Guide</Button>
                    <Button className="Typo" href="https://www.notion.so/CalBridge-Basic-Git-GitHub-Guide-Fall-2022-086521b3c9064624be04b2cfe39d5a2f">2022 Git & GitHub Basics</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/ReactJS-App-Deployment-to-GH-Pages-2023-3e5d202250c34128a404b28b597ab273">2023 ReactJS App Deployment guide to GH Pages</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/Intro-to-ReactJS-Hooks-Spring-2023-17112b1f79344d2491113ba9eca4b3e2">2023 ReactJS Intro to Hooks</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/Basic-HTML-CSS-rules-1b0e51051c7d44d4a1066f891183b8b4">2023 HTML/CSS Basics</Button>
                    <Button className='Typo' href="https://toothsome-sheep-35d.notion.site/ThreeJS-Basics-9d61028bb1e14e168d5e1105774f6b03?pvs=4">2023 ThreeJS Workshop</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" className="Typo">2018-2019 Projects</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                        <CardCatScratch/>
                        <CardCatClicker/>
                </AccordionDetails>
            </Accordion>      
        </Box>)
}
