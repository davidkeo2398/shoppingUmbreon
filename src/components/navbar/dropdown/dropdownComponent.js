import { makeStyles } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../../../App";
import color from "../../../assets/colors/colors";

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: 'end',

    },
    text: {
        position: 'relative',
        right: '10px',
    }
}))



export const DropDown = (props) => {
    const [items, setItems] = useState(props.item)
    const [open, setOpen] = useState(false)
    const { keyWord, setKeyWord, isSubmit, setIsSubmit, cart, badge, account, setAccount } = useContext(MyContext)
    const history = useHistory()
    const [email, setEmail] = useState('')


    const handleItemMenu = (e, item) => {
        if (item === 'Logout') {
            let isLogin = {
                isLogin: false
            }
            setAccount(isLogin)
            localStorage.clear()
            window.location.reload()
        }
        if (item === 'Login/Logup') {
            history.push('/login')
        }
    }

    const menu = (
        <div style={{ backgroundColor: color.tertary, color: 'white', height: '150px' }}>
            {items.map((tmp, index) => (
                <div onClick={(e) => handleItemMenu(e, tmp)} key={index} style={{ position: 'relative', top: '10px', textAlign: 'center' }}>
                    <p>{tmp}</p>
                </div>
            ))}
        </div>
    )
    const handleDrop = () => {
        if (open === true) {
            setOpen(false)
        }
        else {
            setOpen(true);
        }

    }
    useEffect(() => {
        console.log(items)
        console.log(props.name)
        setEmail(localStorage.getItem('email'))
        console.log(email)
    }, [])
    const classes = useStyle()
    return (
        <div className={classes.root}>
            {email === 'abc@gmail.com' ? (
                <div className={classes.text}>
                    <p onClick={handleDrop}>{props.name}</p>
                    {open ? menu : null}
                </div>
            ) : <div className={classes.text}>
                <p onClick={handleDrop}>{props.name}</p>
                {open ? menu : null}
            </div>}

        </div>
    );
}