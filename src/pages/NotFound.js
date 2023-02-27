import Footer from "../components/Footer"
import Header from "../components/Header"

export default function NotFound(){
    return (
        <div className="notFound">
            <Header />
            <div className="notFound__content">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>

            <Footer />
        </div>
    )
}