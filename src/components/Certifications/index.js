import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@material-ui/core';
import { Paper } from '@mui/material';

export default function certDesc(){
    return(
    <Box className='Cert-main'> 
        <div className="Cert-header">Certifications<br/></div>
        <div className="Cert">
            <h2 className="Cert-Description">The following are some of the certifications I've earned so far:
            <ImageList className= 'Cert-items' cols={2} sx={{justify:"center"}} >
                {itemData.map((item) => (
                <ImageListItem className="Cert-item" key={item.img} >
                    
                    <img className='Cert-image'
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                
            
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.date}</span>}
                    position="below"
                />
                </ImageListItem>
            ))}
            </ImageList>
            </h2>
      </div>
    </Box>);
}

const itemData = [
    {
      img: require('../assets/images/cert1.png'),
      title: 'Introduction to HTML Module',
      date: '2023',
    },
    {
        img: require('../assets/images/cert2.png'),
        title: 'Introduction to Responsive CSS Module',
        date: '2023',
    },
    {
        img: require('../assets/images/cert3.png'),
        title: 'Basic Content Management Systems Module',
        date: '2023',
    },
    {
        img: require('../assets/images/cert4.png'),
        title: 'Introduction to Javascript Module',
        date: '2023',
    },
    {
        img: require('../assets/images/cert5.png'),
        title: 'Introduction to React Framework Module',
        date: '2024'
    },
    {
        img: require('../assets/images/cert6.png'),
        title: 'Front End Web-App Development Course',
        date: '2024'
    }
]