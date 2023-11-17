import AccordionCard from '../AccordionCard/accordionCard';
import GuideCard from '../GuideCard/index'
import { AccordionSummary, AccordionDetails, Box, Accordion, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';
import ReactImg from '../assets/images/react.png';
import 'animate.css';

export default function projDesc(){
    return (
    <Box className='Proj-main'> 
        <div className="projects-header">Projects and Guides<br/></div>
            <Accordion className="Accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                        <Typography gutterBottom variant="h5" className="Typo">2022- 2023 Projects</Typography>
                </AccordionSummary>
                {AccordionCard(items2223)}
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
                    {GuideCard(guides2223)}  
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography gutterBottom variant="h5" className="Typo">2018-2019 Projects</Typography>
                </AccordionSummary>
                <AccordionDetails className='Card-style'>
                        {AccordionCard(items1819)}
                </AccordionDetails>
            </Accordion>      
        </Box>)
}

const items2223 = [
    {
        projectLink: 'https://alisson.me/catpet',
        projectName: 'CatPet',
        img:require('../assets/images/catpet.png'),
        imgAlt:'Cat',
        githubLink: 'https://github.com/AlissonRoss/catpet',
        description: 'ThreeJS testbed on top of ReactJS that I created to learn more about animation, 3D Modeling, anything ThreeJS! All cat models are made by me!'
    },
    {
        projectLink: 'https://github.com/HackMerced/HackMerced-VIII',
        projectName: 'HackMerced VIII Event Page',
        img:require('../assets/images/hackviii.png'),
        imgAlt: 'HackMerced Tower',
        githubLink: 'https://github.com/HackMerced/HackMerced-VIII',
        description:'Event page for the MLH HackMerced VIII Hackathon for central valley students to view information about the 2023 event. I worked on the Tracks component, the Footer component, Mobile responsiveness, among other fixes. I delegated tasks to my team as the HackMerced Engineering Director 2023'

    },
    {
        projectLink:'https://catpet-login.vercel.app',
        projectName: 'CatPet Login UI Module 1 Project',
        img:require('../assets/images/login-ui.png'),
        imgAlt: 'CatPet Login UI',
        githubLink:'https://github.com/AlissonRoss/login-ui-ross',
        description:'Login Page Project for Bay Valley Techs Code Academy Module 1 certification. Summer 2023.'

    },
    {
        projectLink:'https://tamagoatchi.vercel.app/',
        projectName: 'Tamagoatchi Game Module 2 Final Project',
        img:require('../assets/images/tamagoatchi.png'),
        imgAlt: 'Tamagoatchi',
        githubLink:'https://github.com/AlissonRoss/Tamagoatchi',
        description:'Pet game Project for Bay Valley Techs Code Academy Module 2 certification. Fall 2023.'
    }
];
const items1819 = [
    {
        projectLink: 'https://alisson.me/catscratch/',
        projectName: 'Catscratch',
        img:require('../assets/images/catscratch.png'),
        imgAlt:'Cat',
        githubLink: 'https://github.com/AlissonRoss/catscratch',
        description: ' The user starts off with 50 credits. They will need to scratch the four boxes to reveal images of Tux, the cat.Two duplicates will add +10 credits. You can try again for -10 credits.'
    },
    {
        projectLink: 'https://alisson.me/catclicker/',
        projectName: 'Catclicker',
        img:require('../assets/images/catclicker.png'),
        imgAlt:'Cat',
        githubLink: 'https://github.com/AlissonRoss/catclicker',
        description: 'Kittens fall from the sky on-click! A simple clicker game.'
    },
]
const guides2223 = [
    {
        guideLink: 'https://www.notion.so/Intro-to-ReactJS-Guide-Fall-2022-5978106126f94dfd8ea0597c47177816',
        guideName: '2022 Intro to ReactJS Guide',
    
    },
    {
        guideLink: 'https://www.notion.so/CalBridge-Basic-Git-GitHub-Guide-Fall-2022-086521b3c9064624be04b2cfe39d5a2f',
        guideName: '2022 Git & GitHub Basics',
    
    },
    {
        guideLink: 'https://toothsome-sheep-35d.notion.site/ReactJS-App-Deployment-to-GH-Pages-2023-3e5d202250c34128a404b28b597ab273',
        guideName: '2023 ReactJS App Deployment guide to GH Pages',
    
    },
    {
        guideLink: 'https://toothsome-sheep-35d.notion.site/Intro-to-ReactJS-Hooks-Spring-2023-17112b1f79344d2491113ba9eca4b3e2',
        guideName: '2023 ReactJS Intro to Hooks',
    
    },
    {
        guideLink: 'https://toothsome-sheep-35d.notion.site/Basic-HTML-CSS-rules-1b0e51051c7d44d4a1066f891183b8b4',
        guideName: '2023 HTML/CSS Basics',
    
    },
    {
        guideLink: 'https://toothsome-sheep-35d.notion.site/ThreeJS-Basics-9d61028bb1e14e168d5e1105774f6b03?pvs=4',
        guideName: '2023 ThreeJS Workshop',
    
    },
]