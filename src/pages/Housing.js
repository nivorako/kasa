
import Footer from "../components/Footer"
import Header from "../components/Header" 
import Rating from "../components/Rating"

import dataHousing from "../data/housing.json"

import { useParams } from "react-router-dom"
import Collapse from "../components/Collapse"

export default function Housing(){
    const {id} = useParams()
    let selectedId = dataHousing.find(data => data.id === id)
    return (
        <div className="housing">
            <Header />
            <main className="housing__content">
                <section className="housing__carrousel">
                    <img src={selectedId.cover} alt={selectedId.title} />
                </section>

                <section className="housing__details">
                    <div className="housing__detailsHeader">
                        <div className="housing__detailsTitle">
                            <h2>{selectedId.title}</h2>
                            <p>{selectedId.location} </p>
                            <ul>
                                {
                                    selectedId.tags.map((tag, index) => (
                                        <li key={index} >
                                            {tag}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="housing__detailsHost">
                            <div className="housing__detailsHostName">
                                <p>{selectedId.host.name} </p>
                                <img src={selectedId.host.picture} alt=""></img>
                            </div>
                            <Rating 
                                rating={selectedId.rating}
                            />
                        </div>
                    </div>
                    <div className="housing__detailsArticle">
                        
                            <Collapse
                                title="Descrition"
                                text={selectedId.description}
                                type="HousingTexte"
                            />
                        
                        
                            <Collapse 
                                title="Equipement"
                                text={selectedId.equipments}
                                type="liste"
                            />
                       
                    </div>
                       
                </section>
            </main>
            <Footer />
        </div>
    )
}