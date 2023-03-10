import { useState } from "react"
import arrow from "../assets/arrow.png"

export default function Collapse({title, text, type, id}){

    const [isOpen, setIsOpen] = useState(true)
   
    return isOpen ? (
        <article className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(false)}>
                <h3>{title} </h3>
                <img src={arrow} alt="" className="arrowUp"/>
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
        (<article className="collapse">
            <div className="collapse__header" onClick={() => setIsOpen(true)}>
                <h3>{title} </h3>
                <img src={arrow} alt="" className="arrowDown"/>
            </div>
        </article>
        )
}