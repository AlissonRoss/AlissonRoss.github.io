import { Box } from '@material-ui/core'
import 'animate.css';
import Photo from '../PhotoCard/index.js'
export default function mainDesc(){
    return  (
    <>
    <Photo/>
    <Box className='App-main'> 
        <div className="Hello-world">Hello World!<br/></div>
        I am an incoming CSU Stanislaus Computer Science student for Spring 2024.
        I oversee the web development team as the Front-end web development Director for HackMerced 2023. I am a New Technologist Alumna from Microsoft M365 Team & Cyborg Mobile Cohort 8 2022, and 
        a web development student in BVT's Cohort-236 2023.
        I make website components using ReactJS, Typescript, and other front-end tools.<br/>
    </Box>
    </>)
}