import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Product } from "../product/productComponent";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useAxios from "axios-hooks";
import { Category } from "@material-ui/icons";
import { Catgories } from "../../categories/categoriesComponent";
import color from "../../../assets/colors/colors";
import { mergeClasses } from "@material-ui/styles";
import { PriceRange } from "../../pricerange/priceRangeComponent";

import sale from '../../../assets/images/sale.png'
import { Lazyloading, Skeleton } from "../../skeletonComponent";
import LazyLoad from "react-lazyload";
import { useHistory } from "react-router";
import { MyContext } from "../../../App";

const useStyle = makeStyles((theme) => ({
    root: {},
    title: {
        color: color.primary,
    },
}))

export const ProductList = () => {


    const [category, setCategory] = useState('')

    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [list, setList] = useState([])
    const [temp, setTemp] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const button = [];
    const [page, setPage] = useState({
        numberPages: 4,
        productsPerPage: 6,
    })

    const classes = useStyle();

    const { keyWord, setKeyWord, isSubmit, setIsSubmit } = useContext(MyContext)


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {

                if (isSubmit) {
                    setProducts(products.filter((data) => JSON.stringify(data).toLowerCase().indexOf(keyWord.toLowerCase()) !== -1))
                    // console.log()
                    const tmp = []
                    for (let i = 0; i < products.length / page.productsPerPage; i++) {
                        tmp.push(i)
                    }
                    setTemp(tmp)
                } else {
                    setList(res.data)
                    var listProducts = res.data
                    const currentProducts = [];
                    currentProducts.length = page.numberPages;
                    for (let i = 0; i < page.numberPages; i++) {

                        const tmp = listProducts.slice(i * page.productsPerPage, page.productsPerPage * (i + 1));
                        currentProducts[i] = tmp
                    }
                    setProducts(currentProducts[0])
                    setTemp(currentProducts)
                }
            }).catch(err => console.log(err))

        for (let i = 0; i < 4; i++) {
            let tmp = (<Button>{i + 1}</Button>)
            button.push(tmp)
        }

    }, [isSubmit])

    const handlePage = (event, i) => {
        event.preventDefault();
        // console.log(i);
        const currentProducts = [];
        currentProducts.length = page.numberPages;
        for (let i = 0; i < page.numberPages; i++) {

            const tmp = list.slice(i * page.productsPerPage, page.productsPerPage * (i + 1));
            currentProducts[i] = tmp

        }
        setProducts(currentProducts[i])
        setCurrentPage(i)
        console.log(currentPage)
    }



    const handleArrow = (e, i) => {
        e.preventDefault();
        if (i === '+') {
            if (currentPage < 3) {
                setProducts(temp[currentPage + 1])
                setCurrentPage(currentPage + 1)
            }
            else { setCurrentPage(page.numberPages - 1) }

        }
        if (i === '-') {
            if (currentPage > 0) {
                setProducts(temp[currentPage - 1])
                setCurrentPage(currentPage - 1)
            }
            else { setCurrentPage(0) }

        }
    }
    return (

        <div>
            <Grid container spacing={1}>
                <Grid item xs={1}></Grid>

                <Grid item xs={3}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        height: '3px',

                                    }} />
                                </Grid>
                                <Grid style={{ textAlign: 'center' }} item xs={8}>
                                    <h1 className={classes.title}>CATEGORIES</h1>
                                </Grid>
                                <Grid item xs={2}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        height: '3px',

                                    }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Catgories set={{ setList: setList, setProducts: setProducts, setPage: setTemp, setCategory: setCategory }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        height: '3px',

                                    }} />
                                </Grid>
                                <Grid style={{ textAlign: 'center' }} item xs={8}>
                                    <h1 className={classes.title}>PRICE RANGE</h1>
                                </Grid>
                                <Grid item xs={2}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        height: '3px',

                                    }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <PriceRange data={{ products: products, list: list, category: category }} set={{ setList: setList, setProducts: setProducts, setPage: setTemp, setCurrentPage: setCurrentPage }}></PriceRange>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        height: '3px',
                                    }} />
                                </Grid>
                                <Grid style={{ textAlign: 'center' }} item xs={4}>
                                    <h1 className={classes.title}>SALES</h1>
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
                            </Grid>
                        </Grid>
                        <Grid style={{ height: '400px' }} item xs={12}>
                            <img id="sale" src={sale} />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={7}>
                    <Grid container >
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        height: '3px'
                                    }} />
                                </Grid>
                                <Grid item xs={4}><h1 className={classes.title}>PRODUCTIONS</h1></Grid>
                                <Grid item xs={4}>
                                    <Divider style={{
                                        position: 'relative',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        height: '3px'
                                    }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid style={{ height: '100%' }} container spacing={2}>

                                {products.map((tmp) => (
                                    <Product grid={4} key={tmp.id} prod={tmp} loading={{ isLoading: isLoading, setLoading: setLoading }} />
                                ))}

                            </Grid>
                        </Grid>
                        <Grid style={{ height: '20px' }} item xs={12}></Grid>

                        <Grid item xs={12}>
                            <Button>
                                {temp.length === 1 ? <ArrowBackIosIcon /> : <ArrowBackIosIcon onClick={(e) => handleArrow(e, '-')} />}

                            </Button>
                            {temp.map((tmp, i) => {
                                return (
                                    <Button onClick={(e) => handlePage(e, i)} key={i} value={i + 1}>{i + 1}</Button>
                                );
                            })}
                            <Button>
                                {temp.length === 1 ? <ArrowForwardIosIcon /> : <ArrowForwardIosIcon onClick={(e) => handleArrow(e, '+')} />}

                            </Button>
                        </Grid>
                        <Grid style={{ height: '20px' }} item xs={12}></Grid>


                    </Grid>

                </Grid>

            </Grid>

        </div>
    );
}