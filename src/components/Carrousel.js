import arrow from "../assets/arrow.png"

import { useEffect } from "react"

export default function Carrousel({imgSrc,alt}){
   
    let index = 0
    useEffect(() => {
        showSlide(index)
    })

    function showSlide(n){
        const items = document.getElementsByClassName("carrousel__item")

        const length = items.length
        for(let i = 0; i < length; i++){
            items[i].style.display = "none"
        }
        
        items[n].style.display = "block"
       
    }

    function handleOnClickRightA(n){

        const items = document.getElementsByClassName("carrousel__item")
        const length = items.length

        if(n < length - 1) {
            n++
            showSlide(n)
        }
        else if(n === length - 1) showSlide(0)      
    }

    function handleOnClickLeftA(n){
        const items = document.getElementsByClassName("carrousel__item")
        const length = items.length
        
        if(n > 0) {
            n--
            showSlide(n)
        }
        else if(n === 0) {
            n = length - 1
            showSlide(n)
        }
    
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
                                
                                <img 
                                    src={arrow} 
                                    alt="fleche droite" 
                                    className="carrousel__rightA" 
                                    onClick={() => handleOnClickRightA(index)}  
                                />
                                
                                <img 
                                    src={arrow} 
                                    alt="fleche gauche" 
                                    className="carrousel__leftA"
                                    onClick={() => handleOnClickLeftA(index)} 
                                />
                                <p className="carrousel__count">{index + 1} / {imgSrc.length} </p>
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
            
        </section>
    )
}