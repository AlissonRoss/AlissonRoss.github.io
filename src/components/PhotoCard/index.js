import { CardMedia, Card } from "@material-ui/core";
import Alisson from '../assets/images/me.jpg';
export default function PhotoCameraRounded(){
    return(
        <Card raised className="Photo-card">
            <CardMedia
                className="Photo-card-media"
                component="img"
                image={Alisson}
                alt={"me"}
            />
        </Card>
    )
}