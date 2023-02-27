//import { useState } from "react"
import arrow from "../assets/arrow.png"

export default function Collapse({title, text, type}){
    
    function handleTextOnClick(){
        const btn = document.querySelector('.collapseText__btn')
        const list = document.querySelector(".collapseText__text")
        btn.classList.toggle("rotate")
        list.classList.toggle("hidden")
    }

    function handleListOnClick(){
       const btn = document.querySelector('.collapseList__btn')
       const list = document.querySelector(".collapseList__list")
       btn.classList.toggle("rotate")
       list.classList.toggle("hidden")
    }

    function handleAboutOnClick(elt){
        const btn = document.querySelector(".")
    }

    if(type === "liste"){
        return (
                    <article className="collapseList">
                <div className="collapseList__header" onClick={() => handleListOnClick()} >
                    <h3>{title} </h3>
                    <img src={arrow} alt="" className="collapseList__btn"/>
                </div>
                <ul className="collapseList__list">
                    { 
                        text.map((elt, index) =>(
                            <li key={index} >
                                <p>{elt} </p>
                            </li>
                        ))
                    }
                </ul>

            </article>
        )
    }
    else if(type === "housingTexte"){
        return (
            <article className="collapseText">
                <div className="collapseText__header" onClick={() => handleTextOnClick()}>
                    <h3>{title} </h3>
                        <img src={arrow} alt="" className="collapseText__btn"/>
                    </div>
                    <div className="collapseText__text">
                        <p>{text} </p>
                </div>
         </article>
        )
    }
    else if(type === "aboutTexte"){
        return (
            <article className="collapseAbout">
                <div className="collapseAbout__header" onClick={() => handleAboutOnClick({title})}>
                    <h3>{title} </h3>
                    <img src={arrow} alt="" className={`collapseAbout__btn${title}`} />
                </div>
                <div className={ `collapseAbout__text${title}`}>
                    <p>{text} </p>
                </div>
            </article>
        )
    }
   
}