import { Button, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import color from "../../../assets/colors/colors";
import { NavBar } from "../../navbar/navbarComponent";
import { MyContext } from "../../../App";
import { Footer } from "../../footer/footerComponent";
import { Recommend } from "../recommend/recommendComponent";

const useStyle = makeStyles((theme) => ({
    root: {},
    img: {
        width: '150px',
        // display: 'block',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // paddingTop: '20px',
        // paddingBottom: '20px',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    btnAmount: {
        backgroundColor: color.primary,
        color: 'white',
        '&:hover': {
            backgroundColor: color.tertary
        }
    },
    btn: {
        backgroundColor: color.tertary,
        color: 'white',
        '&:hover': {
            backgroundColor: color.secondary
        }
    }
}))

export const ProductDetails = () => {
    const classes = useStyle();
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const [rating, setRating] = useState(0);
    const [amount, setAmount] = useState(1);
    const [quantity, setQuantity] = useState(0);
    const { isDisable, setDisable, cart, setCart, badge, setBadge } = useContext(MyContext)



    useEffect(() => {
        console.log(id);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
                setRating(res.data.rating.rate)
                setQuantity(res.data.rating.count)
                // console.log(typeof image)
            })
    }, [id])

    const handleAmount = (e, opr) => {
        e.preventDefault();
        if (opr === '+') {
            setAmount(Math.min(amount + 1, quantity))
            console.log(amount)
        }
        if (opr === '-') {
            setAmount(Math.max(amount - 1, 1))
        }
        // console.log(isDisable)
    }
    const handleChange = (e) => {
        let tmp = e.target.value
        console.log(tmp)
        if (tmp !== '') {
            setAmount(Math.min(parseInt(tmp), quantity))
        }

    }
    const handleAddToCart = (e) => {

        const newItem = {
            id: id,
            title: product.title,
            price: product.price,
            image: product.image,
            rate: product.rating.rate,
            quantity: product.rating.count,
            count: 1,
        }
        setCart([...cart, newItem])
        // console.log(cart.findIndex(tmp => tmp.id === newItem.id))
        let find = cart.findIndex(tmp => tmp.id === newItem.id)
        var tmp = []
        if (cart !== []) {
            tmp = cart
        }
        if (find > -1) {
            tmp[find].count += amount
            tmp[find].newPrice = tmp[find].price * (amount + 1)
            setBadge(badge + amount)
            setCart(tmp)
        }
        else {
            newItem.count += (amount - 1)
            newItem.newPrice = newItem.price * amount
            setBadge(badge + amount)
            setCart([...cart, newItem])
        }
        console.log('tmp', tmp)
    }

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <NavBar custom={{ isDisable: isDisable, setDisable: setDisable }} />
                </Grid>
                <Grid style={{ height: '150px' }} item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Card style={{ height: '350px' }}>
                                <img className={classes.img} src={product.image} />
                            </Card>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom>
                                {product.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <p><b>Description: </b>{product.description}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <Rating name="read-only" value={rating} readOnly />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' >
                                Price: ${product.price}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' >
                                Category: {product.category}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Typography variant='h6'>Quantity: </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={(e) => handleAmount(e, '-')} className={classes.btnAmount}>-</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    {/* <Button style={{ backgroundColor: 'rgba(250,250,250,0.3)' }} variant="contained" disabled>
                                        {amount}
                                    </Button> */}
                                    <input onChange={(e) => handleChange(e)} style={{ width: '50px', fontSize: '25px' }} value={amount} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button onClick={(e) => handleAmount(e, '+')} className={classes.btnAmount}>+</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid style={{ height: '7px' }} item xs={12}></Grid>
                        <Grid item xs={12}>
                            <Button className={classes.btn}>Buy now</Button>
                            <Button onClick={(e) => handleAddToCart(e)} className={classes.btn} style={{ marginLeft: '10px' }}>Add to cart</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid style={{ height: '50px' }} item xs={12}></Grid>
                <Grid style={{ height: '100vh' }} item xs={12}>
                    <Recommend tmp={{ category: product.category, id: product.id }} />
                </Grid>
                <Grid style={{ width: '100vw' }} item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}