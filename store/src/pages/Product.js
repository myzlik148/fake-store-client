import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './product.css'

export default function Product() {
    const params = useParams(),
        id = params.id
    const [product, setProduct] = useState([])
    useEffect(getProduct, [])

    function getProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`).
            then(res => setProduct(res.data))
    }
    return <div
        className="product">
        <img width={200} height={200} src={product.image} />
        <br /><h1>{product.title}</h1> <button>add to cart </button>
        <h2>{product.price}$</h2><p>{product.description}</p>
    </div>
}