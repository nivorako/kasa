import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"

import bannerAbout from "../assets/bannerAbout.jpg"
import Cards from "../components/Cards"

export default function About(){
    return(
        <div className="about">
            <Header />
            <main className="about__content">
                <Banner 
                    imgSrc={bannerAbout}
                    altTxt="paysage"
                />
                <Cards />
            </main>
            <Footer />
        </div>
    )
}