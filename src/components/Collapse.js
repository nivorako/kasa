import { useState } from "react"
import arrow from "../assets/arrow.png"

export default function Collapse({title, text, type}){

    const [isOpen, setIsOpen] = useState(false)
   
    return isOpen ? (
        <article className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title} </h3>
                <img src={arrow} alt="" className="arrowDown"/>
            </div>
            <div className="collapse__paragraph">
                {
                    type === "text" ? (
                        <p>{text}</p>
                    ) : (
                        <ul>
                            {text.map((elt, index) => (
                                <li key={index}>
                                    <p>{elt} </p>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </article>
    ) :
        (<article className="collapse whiteBgrColor"> 
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title} </h3>
                <img src={arrow} alt="" className="arrowUp"/>
            </div>
        </article>
        )
}