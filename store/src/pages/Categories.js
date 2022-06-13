import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './categories.css'
export default function Categories() {


    const [category, setCategory] = useState([])
    useEffect(getCategories, [])
    function getCategories() {
        axios.get('https://fakestoreapi.com/products/categories').
            then(res => setCategory(res.data))
    }
    return <div className="pro">
        {category.map(item =>{return <span className="category" key={item}>
            <Link className="link" to={`/Products/${item}`}>{item}</Link></span>})}
    </div>

} 