import { Button, Card, CardActionArea, CardActions, CardContent, Checkbox, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../../App";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80vw',
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

const User = {
    email: 'abc@gmail.com',
    password: '123'
}

export const Login = () => {
    const classes = useStyles();
    const { keyWord, setKeyWord, isSubmit, setIsSubmit, cart, badge, account, setAccount, isRemember, setIsRemember } = useContext(MyContext)
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const history = useHistory()

    const handleChange = (e, inp) => {
        if (inp === 'email') {
            setEmail(e.target.value)
        }
        if (inp === 'password') {
            setPassowrd(e.target.value)
        }
        console.log(`email: ${email}, password: ${password}`)
    }

    const handleCheck = (e) => {
        if (isRemember === false) {
            setIsRemember(true)
        }
        if (isRemember === true) {
            setIsRemember(false)
        }
        console.log(isRemember)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === User.email && password === User.password) {
            setAccount({ isLogin: true })
            if (isRemember === false) {
                localStorage.setItem('email', User.email)
                localStorage.setItem('pasword', User.password)
            }
            history.push('/')
        }

    }

    return (
        <div>
            <Card style={{ width: '90vw', position: 'relative', left: '50%', transform: 'translateX(-50%)', top: '100px' }}>
                <CardContent>
                    <Typography align='center' variant='h5'>LOGIN</Typography>
                </CardContent>
                <CardActions>
                    <CardActionArea>
                        <form onSubmit={(e) => handleLogin(e)} className={classes.root}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField value={email} onChange={(e) => handleChange(e, 'email')} style={{ width: '500px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }} id="standard-basic" label="email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField value={password} onChange={(e) => handleChange(e, 'password')} style={{ width: '500px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }} id="standard-basic" label="password" />
                                </Grid>
                                <Grid item xs={4}></Grid>

                                <Grid item xs={2}>
                                    <Checkbox onClick={(e) => handleCheck(e)} style={{ position: 'relative', left: '50px' }} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }} align='left' variant='subtitle1'>Remember me!!!</Typography>
                                </Grid>
                                <Grid item xs={4}></Grid>

                                <Grid item xs={12}>
                                    <Button onClick={(e) => handleLogin(e)} style={{ width: '500px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>Login</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button style={{ width: '500px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>Registeration</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardActionArea>
                </CardActions>
            </Card>
        </div>
    );
}