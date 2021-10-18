import { Badge, Button, Divider, Drawer, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import '../../assets/css/navbar.css';

import color from '../../assets/colors/colors'
import { DropDown } from './dropdown/dropdownComponent';
import { withStyles } from '@material-ui/styles';

import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { MyContext } from '../../App';
import { useHistory } from 'react-router';


// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
const useStyle = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: 99,
        fontWeight: 'bold',
        backgroundColor: 'rgba(242, 94, 93, 0.3)',
    },
    container: {
        direction: 'row'
    },
    head: {
        background: color.tertary,
        height: 'auto',
    },
    leftside: {
        textAlign: 'start',
    },
    rightside: {

    },
    searchIcon: {
        backgroundColor: color.tertary,
        '&:hover': {
            backgroundColor: color.primary
        }
    }
}))

const StyledBadge = withStyles((theme) => ({
    badge: {
        position: 'relative',
        left: -10,
        top: 25,
        border: `2px solid ${color.primary}`,
        padding: '0 4px',
        backgroundColor: color.tertary,

    },
}))(Badge);


export const NavBar = (props) => {
    const classes = useStyle();
    const match = useMediaQuery('(max-width: 500px)')
    const [open, setOpen] = useState(false)
    const [openAc, setOpenAc] = useState(false)
    const { keyWord, setKeyWord, isSubmit, setIsSubmit, cart, badge, account, setAccount } = useContext(MyContext)
    const { isDisable, setDisable } = props.custom

    const history = useHistory()

    const handleMenu = () => {
        if (open === false) {
            setOpen(true)
        } else { setOpen(false) }
    }
    const handleAccount = () => {
        if (openAc === false) {
            setOpenAc(true)
        } else { setOpenAc(false) }
    }


    const handleChange = (e) => {
        e.preventDefault();
        setKeyWord(e.target.value)
        setIsSubmit(false)
        console.log(keyWord)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true)
        console.log(isSubmit)
    }

    const handleCart = (e) => {
        history.push('/cart')
    }

    const handleChangePage = (e, page) => {
        if (page === 'home') {
            history.push('/')
        }
        if (page === 'shop') {
            history.push('/shop')
        }
    }

    return (
        <div>

            {!match ? (
                <Grid className={classes.root} container >
                    {/* ================== head ===================== */}
                    <Grid className={classes.head} item xs={12}>
                        <Grid container spacing={0}>
                            <Grid item xs={1}></Grid>
                            <Grid className={classes.leftside} item xs>
                                <p><span><i style={{ position: 'relative', right: '2px' }} className="fas fa-phone-square"></i></span>+099 999 9999</p>
                            </Grid>
                            <Grid className={classes.leftside} item xs>
                                <p><span><i style={{ position: 'relative', right: '2px' }} className="fas fa-envelope-square"></i></span>umbreom@gmail.com</p>
                            </Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-facebook-square"></i></span>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-twitter-square"></i></span>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-instagram-square"></i></span>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-google-plus-square"></i></span>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Grid>
                    {/* ==================== body ==================== */}
                    <Grid style={{ height: '50px' }} item xs={12}>
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={1}>
                                <p onClick={(e) => handleChangePage(e, 'home')} className={classes.leftside}>Home</p>
                            </Grid>
                            {/* ===================== shop =================== */}
                            <Grid item xs={1}>
                                <p onClick={(e) => handleChangePage(e, 'shop')} className={classes.leftside}>Shop</p>
                            </Grid>
                            <Grid item xs={1}>
                                <p className={classes.leftside}>About us</p>
                            </Grid>
                            <Grid item xs={4}>
                                {isDisable ? <form onSubmit={(e) => handleSubmit(e)}>
                                    <Grid container>
                                        <Grid item xs={10}>
                                            <input value={keyWord} onChange={(e) => handleChange(e)} style={{ position: 'relative', top: '25px', width: '370px' }} className='search' placeholder='Search...' />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button type='submit' style={{ position: 'relative', top: '6px' }}
                                                className={classes.searchIcon}><SearchIcon /></Button>

                                        </Grid>
                                    </Grid>
                                </form> : null}


                            </Grid>
                            <Grid item xs={2}>
                                <Grid container>
                                    <Grid item xs>
                                        <p onClick={(e) => handleCart(e)} style={{ position: 'relative', left: '80px' }} className={classes.rightside}>Cart</p>
                                    </Grid>
                                    <Grid item xs>
                                        <StyledBadge badgeContent={badge}>
                                            {/* <i className="fas fa-shopping-cart"></i> */}
                                            <ShoppingCartIcon style={{ position: 'relative', top: '12px', left: '6px' }} />
                                        </StyledBadge>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* ==== Login / Acount / Wishlist / Checkout ==== */}
                            <Grid item xs={1}>
                                {localStorage.getItem('email') === 'abc@gmail.com' ? <DropDown name='Kyle' item={['Account', 'Wishlist', 'Checkout', 'Logout']} />
                                    : <DropDown name='Account' item={['Account', 'Wishlist', 'Checkout', 'Login/Logup']} />
                                }

                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{ width: '90%', position: 'relative', left: '50%', transform: 'translateX(-50%)', zIndex: -1 }} />
                </Grid>
            ) : (
                <Grid container className={classes.root}>

                    {/* ================== head ===================== */}
                    <Grid className={classes.head} item xs={12}>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <p><span><i style={{ position: 'relative', right: '2px' }} className="fas fa-phone-square"></i></span>+099 999 9999</p>
                            </Grid>
                            <Grid item xs={6}>
                                <p><span><i style={{ position: 'relative', right: '2px' }} className="fas fa-envelope-square"></i></span>umbreom@gmail.com</p>
                            </Grid>
                            <Grid item xs={12}>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-facebook-square"></i></span>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-twitter-square"></i></span>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-instagram-square"></i></span>
                                <span><i style={{ width: '30px', height: '30px' }} className="fab fa-google-plus-square"></i></span>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* ==================== body ==================== */}
                    <Grid container>
                        <Grid item xs={2}>
                            <Button >
                                <MenuIcon onClick={handleMenu} />
                            </Button>
                            <Drawer anchor='left' open={open} onClose={handleMenu}>
                                <Grid container>
                                    <Grid item xs={12}><p>Home</p></Grid>
                                    <Grid item xs={12}><p>Shop</p></Grid>
                                    <Grid item xs={12}><p>About us</p></Grid>
                                </Grid>
                            </Drawer>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3}>
                            <Button style={{ position: 'relative', left: '25px' }} >
                                <AccountCircle onClick={handleAccount} />
                            </Button>
                            <Drawer anchor='right' open={openAc} onClose={handleAccount}>
                                <Grid container>
                                    <Grid item xs={12}><p>Home</p></Grid>
                                    <Grid item xs={12}><p>Shop</p></Grid>
                                    <Grid item xs={12}><p>About us</p></Grid>
                                </Grid>
                            </Drawer>
                        </Grid>
                    </Grid>



                    <Divider style={{ width: '90%', position: 'relative', left: '50%', transform: 'translateX(-50%)', zIndex: -1 }} />

                </Grid>
            )}

        </div>
    );
}