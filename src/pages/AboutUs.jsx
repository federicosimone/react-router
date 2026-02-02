import style from './AboutUs.module.css'


function AboutUs() {
    return (
        <>

            <div className={`${style.jumboAbout}`}>
                <h1>Zalando Team</h1>
                <div className="d-flex justify-content-center p-5">

                    <div className={`${style.bgClothes}`}></div>
                    <div className={`${style.paragraph}`}>Aiutiamo le persone a sentirsi a proprio agio con ciò che indossano. Selezioniamo,
                        abbiniamo e consigliamo outfit pensati per semplificare lo shopping online e trasformarlo in un’esperienza su misura.</div>
                </div>
                <div className="d-flex justify-content-center p-5">
                    <div className={`${style.paragraph}`}>Siamo nati per semplificare lo shopping online. Unendo passione per lo stile e attenzione alle persone,
                        aiutiamo ogni giorno chi compra sul nostro e-commerce a scegliere outfit pensati per stare bene, prima ancora che per apparire.</div>
                    <div className={`${style.bgCouple}`}></div>
                </div>

            </div>
        </>
    )
}

export default AboutUs