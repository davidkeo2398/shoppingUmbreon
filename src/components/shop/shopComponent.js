import { Grid } from "@material-ui/core";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Product } from "../feature/product/productComponent";
import { Footer } from "../footer/footerComponent";
import { NavBar } from "../navbar/navbarComponent";

export const Shop = () => {
    const [isLoading, setLoading] = useState(true)
    const { isDisbale, setDisable } = useContext(MyContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    return (
        <Grid container>
            <Grid item xs={12}>
                <NavBar custom={{ isDisbale: isDisbale, setDisable: setDisable }} />
            </Grid>
            <Grid style={{ height: '120px' }} item xs={12}></Grid>
            <Grid item xs={12}>
                <Grid style={{ width: '90%', position: 'relative', left: '50%', transform:'translateX(-50%)'}} container spacing={2}>
                    {products.map((tmp) => (
                        <Product grid={3} key={tmp.id} prod={tmp} loading={{ isLoading: isLoading, setLoading: setLoading }} />
                    ))}
                </Grid>
            </Grid>
            <Grid style={{ height: '20px' }} item xs={12}></Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    );
}