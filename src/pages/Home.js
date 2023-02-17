import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
// import "../styles/home.css"

export default function Home() {
    return (
        <div className="home">
            <Header />
            <main className="home__content">
                <Banner />
            </main>
            <Footer />
        </div>
    )
}
