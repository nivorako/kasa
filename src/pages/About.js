import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

import bannerAbout from "../assets/bannerAbout.jpg"

import about from "../data/about.json"

export default function About(){
    return(
        <div className="about">
            <Header />
            <main className="about__content">
                <Banner 
                    imgSrc={bannerAbout}
                    altTxt="paysage"
                />
                {about.map((elt) => (
                    <Collapse
                        title={elt.title}
                        type="aboutTexte"
                        text={elt.description}
                    />
                    
                ))}
            </main>
            <Footer />
        </div>
    )
}