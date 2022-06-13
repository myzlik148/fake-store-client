import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './products.css'


export default function Products() {
  //  const popUpcontext = useContext()
    const params = useParams(),
        item = params.item
    const [products, setProducts] = useState([])
    useEffect(getProducts, [])

    function getProducts() {
        axios.get(`https://fakestoreapi.com/products/category/${item}`)
            .then(res => { setProducts(res.data) })
    }
    return <main>
        <h2 className="header">{item}</h2>
        <div className="productss">
            {products.map(item =>
                <div className="products"
                    key={item.id}><Link className="link2" to={`/Product/${item.id}`}>
                        <img width={200} height={200} src={item.image} /><br />
                        <h1>{item.price}$</h1>
                        <button className="button">Add to cart </button>
                        <br /><h2>{item.title}</h2></Link></div>)}
        </div></main >
}