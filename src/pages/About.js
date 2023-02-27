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
                <div className="about__contentHeader">
                    <Banner 
                        imgSrc={bannerAbout}
                        altTxt="paysage"
                    />
                </div>
                
                <div className="about__contentMain">
                    {about.map((elt, index) => (
                        <Collapse
                            title={elt.title}
                            type="text"
                            text={elt.description}
                            key={index}
                        />
                        
                    ))}
                </div>
                
            </main>
            <Footer />
        </div>
    )
}