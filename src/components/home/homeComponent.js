import { Grid, makeStyles } from "@material-ui/core";
import { createContext, useContext, useState } from "react";
import { MyContext } from "../../App";
import { Slider } from "../carousel/carouselComponent";
import { Product } from "../feature/product/productComponent";
import { ProductList } from "../feature/productList/productListComponent";
import { Footer } from "../footer/footerComponent";
import { NavBar } from "../navbar/navbarComponent";

const useStyle = makeStyles((theme) => ({
    root: {

    },
    main: {
        zIndex: 98,
    },
}))



export const Home = () => {
    const classes = useStyle();
    const { isDisbale, setDisable } = useContext(MyContext)

    return (
        <div className='App'>

            <div className={classes.root}>

                <Grid container>
                    <Grid item xs={12}>
                        <NavBar custom={{ isDisable: true, setDisable: setDisable }} />
                    </Grid>
                    <Grid style={{ height: '120px' }} item xs={12}></Grid>

                    <Grid item xs={12}>
                        <Slider />

                    </Grid>
                    <Grid style={{ height: '20px' }} item xs={12}></Grid>
                    <Grid item xs={12}>
                        <ProductList />
                    </Grid>
                    <Grid style={{ height: '20px' }} item xs={12}></Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>


            </div>


        </div>

    );
}