import Navigation from "./Navigation"

const Header = () => {
    return(
        <header className="header">
            <div className="header__logo">
                <img src="assets/kasaLogo.svg" className="header__img" alt="kasa logo"/>
            </div>
            <Navigation />
        </header>
    )
}

export default Header