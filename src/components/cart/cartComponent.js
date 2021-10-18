import {
    Card, CardContent, Grid,
    makeStyles, Paper, Table,
    TableCell, TableContainer, TableRow,
    Typography, TableHead, TableBody, Button
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { Footer } from "../footer/footerComponent";
import { NavBar } from "../navbar/navbarComponent";

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import color from "../../assets/colors/colors";
import { SettingsApplications } from "@material-ui/icons";
import { Amount } from "./amount/amountComponent";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    btnBuy: {
        backgroundColor: '#2a7efd',
        color: 'white',
        '&:hover': {
            backgroundColor: '#205bb3'
        }
    }
});

export const Cart = () => {
    const classes = useStyles()
    const [total, setTotal] = useState(0)
    const [count, setCount] = useState(1);

    const { isDisable, setDisable, cart, setCart, badge, setBadge } = useContext(MyContext)
    useEffect(() => {
        console.log('cart ', cart)
        try {
            let finalTotal = 0;
            for (let i = 0; i < cart.length; i++) {
                finalTotal += cart[i].newPrice
            }
            console.log(finalTotal)
            setTotal(finalTotal)
        } catch (e) {
            console.error(e)
        }
    }, [cart])

    const handleRemove = (e, id) => {
        // console.log(id)
        let newCart = cart.filter(tmp => tmp.id !== id)
        setCart(newCart)
        try {
            let finalTotal = 0;
            for (let i = 0; i < cart.length; i++) {
                finalTotal += cart[i].newPrice
                setBadge(badge - cart[i].count)
            }
            console.log(finalTotal)
            setTotal(finalTotal)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <NavBar custom={{ isDisable: isDisable, setDisable: setDisable }} />
                </Grid>
                <Grid style={{ height: '150px' }} item xs={12}></Grid>
                <Grid style={{ height: '100vh' }} item xs={12}>
                    <TableContainer style={{ width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Items</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="right">Price ($)</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="right">Total ($)</TableCell>
                                    <TableCell align="right">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {cart.map((tmp, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">
                                                <img style={{ width: '40px' }} src={tmp.image} />
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography variant='h5'>
                                                    {tmp.title}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant='h5'>
                                                    {tmp.price}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Amount tmp={{ count: tmp.count, quantity: tmp.quantity, setCount: setCount }} />
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant='h5'>
                                                    {tmp.newPrice || tmp.price}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button onClick={(e) => handleRemove(e, tmp.id)}>
                                                    <DeleteForeverIcon style={{ color: color.tertary }} />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow>
                                    <TableCell align="center">-</TableCell>
                                    <TableCell align="left">-</TableCell>
                                    <TableCell align="right">-</TableCell>
                                    <TableCell align="right">-</TableCell>
                                    <TableCell align="right">
                                        <Button disabled>Total: {total.toFixed(2)}</Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button className={classes.btnBuy}>
                                            Buy&nbsp;<MonetizationOnIcon style={{ color: 'greenyellow' }} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid style={{ height: '50px' }} item xs={12}></Grid>
                <Grid style={{ width: '100vw' }} item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}