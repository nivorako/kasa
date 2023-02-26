import arrow from "../assets/arrow.png"

import { useEffect, useState } from "react"

export default function Carrousel({imgSrc,alt}){
    const [index, slideindex] = useState(1)

    useEffect(() => {
        showSlide(index)
    }, [])

    function showSlide(n){
        const items = document.getElementsByClassName("carrousel__item")
        const length = items.length
        if(n > items.length) n = 1
        if(n < 1) n = length
        for(let i = 0; i < length; i++){
            items[i].style.display = "none"
        }
        items[n-1].style.display = "block"
    }
    function currentSlide(n) {
        const dots = document.getElementsByClassName("carrousel__dot")
        const l = dots.length
        for(let i = 0; i < l; i++){
            dots[i].classList.remove("active")
        }
        dots[n].classList.add("active")
        showSlide(n)
        
    }
    return(
        <section className="carrousel">
            <ul className="carrousel__items">
                {
                    imgSrc.length > 1
                        ? (imgSrc.map((src, index) => (
                            <li key={index} className="carrousel__item">
                                <img src={src} alt={alt} className="carrousel__img"/>
                                <img src={arrow} alt="fleche droite" className="carrousel__rightA"></img>
                                <img src={arrow} alt="fleche gauche" className="carrousel__leftA"></img>
                            </li>
                        )))
                        :   (
                            imgSrc.map((src, index) => (
                                <li key={index} className="carrousel__item">
                                    <img src={src} alt={alt} className="carrousel__img"/>
                                    
                                </li>
                            ))
                        )
                } 
            </ul>
            <div className="carrousel__currentSlide">
                {
                    imgSrc.map((src, index) => (
                        src 
                        ?   <span 
                                key={index} 
                                className="carrousel__dot"
                                onClick={() => currentSlide(index)}
                            >
                            </span> 
                        :   null
                    ))
                }
            </div>
            
        </section>
    )
}