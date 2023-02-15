import Header from "../components/Header"
import Footer from "../components/Footer"
// import "../styles/home.css"

export default function Home() {
    return (
        <div className="home">
            <Header />
            <main className="homeContent">
                {/* <img src={require("../assets/ordi.jpg")} alt="toto" /> */}
                <p>totolan</p>
            </main>
            <Footer />
        </div>
    )
}
