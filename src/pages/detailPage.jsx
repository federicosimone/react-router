import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

function detailPage() {

    const { id } = useParams();



    const [details, setDetails] = useState({})



    function getData() {

        let url = `https://fakestoreapi.com/products/${id}`;

        axios.get(url).then((res) => {
            setDetails(res.data)
        }).catch(error => {
            console.error("ops...qualcosa è andato storto")

        })


    }

    useEffect(getData, []);

    const navigate = useNavigate();




    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row ">
                    <div className="col col-6">

                        <img src={details.image} alt="" />
                    </div>
                    <div className="col col-6">
                        <div>
                            <Link to={`/products/`} className="btn btn-primary mt-2 mb-2">Torna alla lista prodotti</Link>
                        </div>
                        <p>{details.category}</p>
                        <h1>{details.title}{id} </h1>
                        <p>{details.description}</p>
                        <p className="fw-bold fs-2">€ {details.price}</p>
                        <button className="btn btn-success">Aggiungi al carrello</button>
                        <div>
                            {/*<Link to={`/products/${parseInt(id) + 1}`} className="btn btn-primary mt-2 mb-2">Prossimo </Link>*/}
                        </div>



                    </div>
                </div>

            </div >

        </>
    )
}

export default detailPage