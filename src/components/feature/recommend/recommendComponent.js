import { Card, CardActionArea, CardContent, Divider, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import color from "../../../assets/colors/colors";

import Carousel from 'react-grid-carousel'
import { Product } from "../product/productComponent";

export const Recommend = (props) => {
    const { category, id } = props.tmp
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => {
                const listTmp = res.data.filter(tmp => tmp.id !== id)
                setProducts(listTmp);

                console.log(listTmp)
            })
            .catch(err => console.error('From Recommend Component: ', err))

        handleLoading()
    }, [id])

    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <div>
            <Grid style={{ textAlign: 'center' }} container>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <Divider style={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '3px',

                    }} />
                </Grid>
                <Grid item xs={2}>
                    <Typography style={{ fontWeight: 'bold', color: color.primary }} variant='h5'>RECOMMEND</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Divider style={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '3px',

                    }} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid style={{ height: '20px' }} item xs={12}></Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={1}></Grid>
                        <Grid  item xs={10}>
                            {/* <Grid container spacing={2}>
                                {products.map((tmp, index) => {
                                    return (
                                        <Product grid={3} key={tmp.id} prod={tmp} loading={{ isLoading: isLoading, setLoading: setLoading }} />
                                    );
                                })}
                            </Grid> */}
                            <Carousel containerStyle={{height: '340px'}} cols={3} rows={1} gap={10} loop autoplay={3000}>
                                {products.map((tmp, index) => {
                                    return (
                                        <Carousel.Item >
                                            <Grid style={{position: 'relative', top: '10px', height: '340px', width: '80%', left: '50%', transform: 'translateX(-50%)'}} container>
                                                <Product grid={12} key={tmp.id} prod={tmp} loading={{ isLoading: isLoading, setLoading: setLoading }} />
                                            </Grid>
                                        </Carousel.Item>

                                    );
                                })}
                            </Carousel>
                        </Grid>
                        <Grid item xs={1}></Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}