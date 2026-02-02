import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


function Products() {

    const [products, setProdutc] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            console.log(res.data);
            setProdutc(res.data)
        }
        )
    }, []);





    return (
        <>
            <div className="container mt-5">
                <div className="d-flex flex-wrap gap-4">

                    {products.map((product) => (

                        <div id={product.id} className="card" style={{ width: "12rem" }} >
                            <img src={product.image} className="card-img-top" alt="thumb" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <Link className="btn btn-info" to="/products/1">Visualizza scheda prodotto</Link>
                            </div>

                        </div>


                    )




                    )}
                </div>
            </div>
        </>
    )
}

export default Products