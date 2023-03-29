export default function Banner({imgSrc, title, altTxt, about}){
    
    return(
        about ? (
            <section className="banner__about">
                <div className="banner__img">
                    <img src={imgSrc} alt={altTxt} /> 
                </div>
                  
            </section>
        ) : (
            <section className="banner">
                <div className="banner__img">
                    <img src={imgSrc} alt={altTxt} /> 
                </div>
                <h1> 
                    <p>{title.split("").splice(0, 10).join("")} </p>
                    <p>{title.split("").splice(10).join("")} </p>
                </h1>
            </section>
        )
    )
}