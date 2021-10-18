
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from "@material-ui/core";

const h = '250';
const w = '900';

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '90%',
        height: 'auto',
        left: '50%',
        transform: 'translateX(-50%)'
    },
}))

export const Slider = () => {

    const classes = useStyle();


    return (
        <div className={classes.root}>
            <Carousel infiniteLoop autoPlay interval='3000' transitionTime='1800' showThumbs={false} showStatus={false}>
                <div>
                    <img alt='image1' src={`https://picsum.photos/id/870/${w}/${h}`} />
                </div>
                <div>
                    <img alt='image2' src={`https://picsum.photos/id/880/${w}/${h}`} />
                </div>
                <div>
                    <img alt='image3' src={`https://picsum.photos/id/890/${w}/${h}`} />
                </div>
            </Carousel>
        </div>
    );
}