
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import { Skeleton } from '../../skeletonComponent';
import { useHistory } from 'react-router';
import { MyContext } from '../../../App';


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


export const Product = (props) => {
    const classes = useStyles();
    // console.log(props.prod)
    const { id, title, price, image, rating } = props.prod
    const { isLoading, setLoading } = props.loading
    const [like, setLike] = useState(false);
    const { keyWord, setKeyWord, setIsSubmit, cart, setCart, badge, setBadge } = useContext(MyContext)

    const history = useHistory()
    const handleGoDetail = (e) => {
        history.push(`/products/${id}`)
        setKeyWord('')
        setIsSubmit(false)
        // console.log(localStorage.getItem('id'))
        console.log(id)
    }

    const handleLike = () => {
        if (!like) {
            setLike(true)
        } else {
            setLike(false)
        }
    }
    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const handleAddToCart = (e) => {
        setBadge(badge + 1)
        const newItem = {
            id: id,
            title: title,
            price: price,
            newPrice: price,
            image: image,
            rate: rating.rate,
            quantity: rating.count,
            count: 1
        }
        // console.log(cart.findIndex(tmp => tmp.id === newItem.id))
        let find = cart.findIndex(tmp => tmp.id === newItem.id)
        var tmp = []
        if (cart !== []) {
            tmp = cart
        }
        if (find > -1) {
            tmp[find].count += 1
            tmp[find].newPrice = tmp[find].count * tmp[find].price
            setCart(tmp)
        }
        else {
            setCart([...cart, newItem])
        }

        console.log('tmp', tmp)
    }

    useEffect(() => {
        handleLoading();
    }, [])
    return (
        <Grid className={classes.root} item xs={props.grid}>

            {!isLoading ?
                <Card className={classes.card} >
                    <CardActionArea style={{ backgroundColor: 'white' }}>
                        <img style={{ width: '120px', height: '150px', display:'block',marginLeft: 'auto',marginRight: 'auto' }} src={image} />
                    </CardActionArea>
                    <CardActionArea>
                        {/* <CardMedia
                    className={classes.media}
                    src='https://picsum.photos/id/870/200/300'
                    title="Contemplative Reptile"
                /> */}
                        {/* <img src='https://picsum.photos/id/870/345/140' /> */}

                        <CardContent>
                            <Typography align='center' gutterBottom variant="h5" component="h2">
                                {`$ ${price}`}
                            </Typography>
                            <Typography align='center' style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} variant="body2" color="textSecondary" component="p">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                        <div style={{ position: 'relative', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                            <Button onClick={(e) => handleAddToCart(e)} className={classes.button} size="small" color="primary">
                                Add to cart
                            </Button>
                            <Button onClick={handleGoDetail} className={classes.button} size="small" color="primary">
                                Detail
                            </Button>
                            <Button className={classes.button} onClick={handleLike} size="small" color="primary">

                                {!like ? <FavoriteBorder className={classes.heart} style={{ color: 'red' }} />
                                    : <Favorite className={classes.heart2} style={{ color: 'red' }} />
                                }

                            </Button>
                        </div>

                    </CardActions>

                </Card> :
                <Skeleton />}

        </Grid>
    );
}