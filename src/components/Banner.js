export default function Banner({imgSrc, title, altTxt}){
    console.log("title1: ", title.split("").splice(0, 10).join(""))
    console.log("title2: ", title.split("").splice(10).join(""))
    return(
        <section className="banner">
            <img src={imgSrc} alt={altTxt} />
            <h1> 
                <p>{title.split("").splice(0, 10).join("")} </p>
                <p>{title.split("").splice(10).join("")} </p>
            </h1>
        </section>
    )
}