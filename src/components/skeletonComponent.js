import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '300px',
    },
    media: {
        height: 140,
    },
    heart: {
        paddingLeft: '5px',
        fontSize: '20px',
        transition: 2000,
        '&:hover': {
            fontSize: '25px'
        },
    },
    heart2: {
        paddingLeft: '5px',
        fontSize: '25px',
    },
    button: {
        height: '40px',
    },
    card: {
        height: '320px'
    }
});

export const Skeleton = () => {
    const classes = useStyles();
    useEffect(() => {

    }, [])
    return (
        <Card className={classes.card} >
            <CardActionArea style={{ backgroundColor: 'white' }}>
                <p style={{ width: '120px', height: '150px' }}>Loading...</p>
            </CardActionArea>
            <CardActionArea>
                {/* <CardMedia
                    className={classes.media}
                    src='https://picsum.photos/id/870/200/300'
                    title="Contemplative Reptile"
                /> */}
                {/* <img src='https://picsum.photos/id/870/345/140' /> */}

                <CardContent>
                    <CircularProgress style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                </CardContent>
            </CardActionArea>
            <CardActions >
                <div style={{ position: 'relative', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                    <Button className={classes.button} size="small" color="primary">
                        Loading...
                    </Button>
                    <Button className={classes.button} size="small" color="primary">
                        Loading...
                    </Button>
                    <Button className={classes.button} size="small" color="primary">
                        Loading...
                    </Button>
                </div>

            </CardActions>

        </Card>

    );
}