
import Footer from "../components/Footer"
import Header from "../components/Header" 

import dataHousing from "../data/housing.json"

import { useParams } from "react-router-dom";

export default function Housing(){
    const {id} = useParams()
    let selectedId = dataHousing.find(data => data.id === id)
    console.log("selected : ", selectedId)
    return (
        <div className="housing">
            <Header />
            <main className="housing__content">
                <section className="housing__banner">
                    <img src={selectedId.cover} alt="" />
                </section>

                <section>
                       
                </section>
            </main>
            <Footer />
        </div>
    )
}