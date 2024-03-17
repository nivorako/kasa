import { Link } from "react-router-dom"
import dataHousing from "../data/housing.json"

export default function Cards(){
    
    
    return(
        <section className="cards" >
            
            <ul className="cards__items">
                {
                dataHousing.map(({ id, title, cover }) => (
                    
                        <li  className="cards__item"  key={id}>
                            <Link to={`/Housing/${id}`}>
                                <div className="cards__img">
                                    <img src={cover}  alt="" />            
                                </div>
                            </Link>
                            <h2>{title}</h2>                           
                        </li>
                    
                ))}
            </ul>
        </section>
    )
}