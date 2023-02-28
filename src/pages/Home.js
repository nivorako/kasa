import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Cards from "../components/Cards"

import bannerHome from "../assets/bannerHome.png"
// import "../styles/home.css"

export default function Home() {
    
    return (
        <div className="home">
            <Header />
            <main className="home__content">
                <Banner 
                    imgSrc={bannerHome}
                    title="Chez vous, partout et ailleurs"
                    altTxt="paysage terre et mer"
                />
                <Cards />
            </main>
            <Footer />
        </div>
    )
}
