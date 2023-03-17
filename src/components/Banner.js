export default function Banner({imgSrc, title, altTxt}){
    return(
        <section className="banner">
            <img src={imgSrc} alt={altTxt} />
            <h1> 
                {title}
            </h1>
        </section>
    )
}