// import "../styles/header.css"

const Header = () => {
    return(
        <header className="header">
            <div className="header__logo">
                <img src="assets/kasaLogo.svg" width={200} height={200} alt="kasa logo"/>
            </div>
            <nav className="header__nav"> navigation</nav>
        </header>
    )
}

export default Header