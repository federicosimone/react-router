import style from './HomePage.module.css'
import { Link } from 'react-router-dom'


function HomePage() {
    return (
        <>
            <div className={style.jumbo}>
                <div className="container">

                    <div className="d-flex justify-content-center">

                        <div className={`${style.orange}`}>
                            <p>Fino al 20 Febbraio, sconto del 20% su una vasta selezione di prodotti</p>

                            <Link to="/products" className="btn btn-dark">Scopri i nostri prodotti</Link>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default HomePage