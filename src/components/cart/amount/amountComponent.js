import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Grid, Button } from '@material-ui/core'


export const Amount = (props) => {
    const { count, quantity, setCount } = props.tmp
    const [amount, setAmount] = useState(0)
    useEffect(() => {
        setAmount(count)
    }, [])
    const handleClick = (e, opr) => {
        if (opr === '+') {
            setAmount(Math.min(amount + 1, quantity))
            setCount(Math.min(amount + 1, quantity))
        }
        if (opr === '-') {
            setAmount(Math.max(amount - 1, 1))
            setCount(Math.max(amount - 1, 1))
        }
        console.log(amount)
    }
    return (
        <div>
            {/* <Grid container>
                <Grid item xs={4}>
                    <Button onClick={(e) => handleClick(e, '-')} value='-'>-</Button>
                </Grid>
                <Grid item xs={4}>
                    <Typography align='center' variant='h5'>
                        {amount}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={(e) => handleClick(e, '+')} value='+'>+</Button>
                </Grid>
            </Grid> */}
            <Typography align='center' variant='h5'>
                {count}
            </Typography>
        </div>
    );
}