import arrow from "../assets/arrow.png"

import { useEffect, useState } from "react"

export default function Carrousel({imgSrc,alt}){
    const [index, slideindex] = useState(0)

    useEffect(() => {
        showSlide(index)
    }, [])

    function showSlide(n){
        
        const items = document.getElementsByClassName("carrousel__item")
        const length = items.length
        if(n > length) slideindex(index)
        if(n === 0) slideindex(length)
        for(let i = 0; i < length; i++){
            items[i].style.display = "none"
        }
        items[n].style.display = "block"
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
    function handleOnClickRightA(){
        console.log('aie aie')
    }
    return(
        <section className="carrousel">
            <ul className="carrousel__items">
                {
                    imgSrc.length > 1
                        ? (imgSrc.map((src, index) => (
                            <li key={index} className="carrousel__item">
                                <img src={src} alt={alt} className="carrousel__img"/>
                                
                                    <img 
                                        src={arrow} 
                                        alt="fleche droite" 
                                        className="carrousel__rightA" 
                                        onClick={() => handleOnClickRightA()}  
                                    />
                                
                                
                                <img 
                                    src={arrow} 
                                    alt="fleche gauche" 
                                    className="carrousel__leftA"
                                />
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