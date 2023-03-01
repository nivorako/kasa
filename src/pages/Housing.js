
import Footer from "../components/Footer"
import Header from "../components/Header" 
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"
import Carrousel from "../components/Carrousel"
import dataHousing from "../data/housing.json"

import { useParams, redirect } from "react-router-dom"

export default function Housing(){
    const {id} = useParams()
    let selectedId = dataHousing.find(data => data.id === id)
    
    return selectedId ? (
        <div className="housing">
            <Header />
            <main className="housing__content">
                
                <Carrousel
                    imgSrc={selectedId.pictures}
                    alt={selectedId.title}
                />
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
                                <div>
                                    <p>{selectedId.host.name.split(" ")[0]} </p>
                                    <p>{selectedId.host.name.split(" ")[1]} </p>
                                </div>
                               
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
                                type="text"
                            />
                        
                        
                            <Collapse 
                               
                                title="Equipement"
                                text={selectedId.equipments}
                                type="list"
                            />
                       
                    </div>
                       
                </section>
            </main>
            <Footer />
        </div>
    ) : (
        redirect("/*")
    )
}