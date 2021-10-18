import { Button, ButtonGroup } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

export const Catgories = (props) => {

    const { setList, setProducts, setPage, setCategory } = props.set
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                setCategories(res.data)
            })
    }, [])

    const handleClick = (e, category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => {
                console.log(res.data)
                // chia trang cho category
                let product = res.data.length / 6;
                let tmp = []
                for (let i = 0; i < product; i++) {
                    tmp.push(i)
                }
                setPage(tmp)

                setProducts(res.data)
                setList(res.data)
                setCategory(category)
            })
    }

    return (
        <div>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                {categories.map((category, index) => (
                    <Button key={index} onClick={(e) => handleClick(e, category)}>{category}</Button>
                ))}
            </ButtonGroup>
        </div>
    );
}