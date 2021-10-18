import { makeStyles, Slider } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import color from '../../assets/colors/colors'

const useStyles = makeStyles({
    root: {
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    slider: {
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
    }
});

// function valuetext(value) {
//     return `${value}°C`;
// }

export const PriceRange = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState([20, 80]);
    const { setList, setProducts, setPage, setCurrentPage } = props.set;
    const { products, list, category } = props.data


    useEffect(() => {
        // empty
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(category)
        // console.log(newValue)
        // axios.get('https://fakestoreapi.com/products')
        //     .then(res => {
        //         let data = res.data
        //         data = data.filter((product, index) => product.price > value[0] && product.price < value[1])
        //         // chia trang cho price range
        //         let tmp = []
        //         for (let i = 0; i < (data.length / 6); i++) {
        //             tmp.push(i)
        //         }
        //         setPage(tmp)

        //         setList(data)
        //         setProducts(data)
        //     })

        if (category === null || category === undefined || category === '') {
            axios.get('https://fakestoreapi.com/products')
                .then(res => {
                    let data = res.data
                    data = data.filter((product, index) => product.price > value[0] && product.price < value[1])
                    // chia trang cho price range
                    let tmp = []
                    for (let i = 0; i < (data.length / 6); i++) {
                        tmp.push(i)
                    }
                    setPage(tmp)
                    setCurrentPage(tmp[0])
                    setList(data)
                    setProducts(data)
                })
        }
        else {
            axios.get(`https://fakestoreapi.com/products/category/${category}`)
                .then(res => {
                    let data = res.data
                    data = data.filter((product, index) => product.price > value[0] && product.price < value[1])
                    // chia trang cho price range
                    let tmp = []
                    for (let i = 0; i < (data.length / 6); i++) {
                        tmp.push(i)
                    }
                    setPage(tmp)
                    setCurrentPage(tmp[0] + 1)
                    setList(data)
                    setProducts(data)
                })
        }

    };
    return (
        <div className={classes.root}>
            <Slider
                value={value}
                min={0}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{color: color.secondary}}
            // getAriaValueText={valuetext}
            />
        </div>
    );
}