import { Grid, makeStyles } from "@material-ui/core";
import { lazy } from "react";
import ReactPlayer from "react-player/youtube";
import umbreon from '../../assets/images/512x512.png'

const useStyle = makeStyles(() => ({
    root: {},
    row1: {
        paddingBottom: '20px',
        paddingTop: '20px',

    },
}))

export const Footer = () => {

    const classes = useStyle();
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <Grid style={{ backgroundColor: 'rgba(242, 94, 94, 0.4)' }} container>
            <Grid className={classes.row1} item xs={12}>
                <Grid container>
                    <Grid item xs={3}>
                        <img style={{ width: '100px', display:'block', marginLeft: 'auto', marginRight: 'auto' }} src={umbreon} />
                    </Grid>
                    <Grid item xs={2}>
                        <ReactPlayer
                            width={'200px'} height={'100px'}
                            playing={true} muted={true}
                            controls={false} loop={true}
                            url='https://www.youtube.com/watch?v=vYPYgHwf2KA' />
                    </Grid>
                    <Grid item xs={2}>
                        <ReactPlayer
                            width={'200px'} height={'100px'}
                            playing={true} muted={true}
                            controls={false} loop={true}
                            url={'https://www.youtube.com/watch?v=vYPYgHwf2KA'} />
                    </Grid>
                    <Grid item xs={2}>
                        <ReactPlayer
                            width={'200px'} height={'100px'}
                            playing={true} muted={true}
                            controls={false} loop={true}
                            url={'https://www.youtube.com/watch?v=vYPYgHwf2KA'} />
                    </Grid>
                    <Grid item xs={3}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5552413090486!2d106.69889771474412!3d10.768719762280726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7dbce91fbd%3A0x3954d44420742ac3!2sNordic%20Coder!5e0!3m2!1svi!2s!4v1633443716579!5m2!1svi!2s"
                            style={{ width: '200px', height: '100px', border: '0px' }} allowFullScreen loading='lazy'></iframe>
                    </Grid>


                </Grid>
            </Grid>
            <Grid style={{ backgroundColor: 'rgb(242, 94, 94)' }} item xs={12}>
                <Grid container>
                    <Grid style={{textAlign: 'center'}} item xs={4}>
                        <p>Copyright © 2021 UMBREON Inc. All rights reserved.</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p style={{ position: 'relative', right: '50px', textAlign: 'right' }}>Design by <span><a>Kyle</a></span></p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}