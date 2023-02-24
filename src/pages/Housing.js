
import Footer from "../components/Footer"
import Header from "../components/Header" 
import Rating from "../components/Rating"

import dataHousing from "../data/housing.json"

import { useParams } from "react-router-dom"

export default function Housing(){
    const {id} = useParams()
    let selectedId = dataHousing.find(data => data.id === id)
    console.log("selected : ", selectedId)
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
                    <article className="housing__detailsArticle">
                        <div className="housing__detailsArticleDesc">
                            <h3>Description</h3>
                            <p>
                                Et irure et nulla cillum et officia labore irure. Pariatur anim sint voluptate laborum commodo aliquip nostrud velit reprehenderit quis commodo. Do minim sunt et Lorem in mollit cupidatat labore. Eiusmod commodo ut aliquip minim incididunt est deserunt dolore ex.  
                            </p>
                        </div>
                        <div className="housing__detailsArticleEquipmt">
                            <h3>Equipement</h3>
                            <p>
                                Et irure et nulla cillum et officia labore irure. Pariatur anim sint voluptate laborum commodo aliquip nostrud velit reprehenderit quis commodo. Do minim sunt et Lorem in mollit cupidatat labore. Eiusmod commodo ut aliquip minim incididunt est deserunt dolore ex.  
                            </p>
                        </div>
                    </article>
                       
                </section>
            </main>
            <Footer />
        </div>
    )
}