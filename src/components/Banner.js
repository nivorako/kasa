export default function Banner({imgSrc, title, altTxt, about}){
    
    return(
        about ? (
            <section className="banner__about">
                <img src={imgSrc} alt={altTxt} />   
            </section>
        ) : (
            <section className="banner">
                <img src={imgSrc} alt={altTxt} />
                <h1> 
                    <p>{title.split("").splice(0, 10).join("")} </p>
                    <p>{title.split("").splice(10).join("")} </p>
                </h1>
            </section>
        )
    )
}