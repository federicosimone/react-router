import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import detailPage from "./detailPage";
import style from './Products.module.css'


function Products() {

    const [products, setProduct] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            console.log(res.data);
            setProduct(res.data)
        }
        )
    }, []);





    return (
        <>
            <div className={`${style.bgProducts}`}>
                <div className="container pt-5">
                    <div className="d-flex flex-wrap gap-4">

                        {products.map((product) => (

                            <div id={product.id} className="card p-2 d-flex flex-column" style={{ width: "12rem" }} >
                                <img src={product.image} className={`${style.cardImage} card-img-top`} alt="thumb" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.title}</h5>
                                    <div className=" mt-auto">
                                        <p className="fw-bold">€ {product.price.toFixed(2)}</p>
                                        <Link className="btn btn-dark" to={`/products/${product.id}`}>Dettagli</Link>
                                    </div>

                                </div>

                            </div>


                        )




                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products