import { Link } from "react-router-dom"
import dataHousing from "../data/housing.json"

export default function Cards(){
    
    
    return(
        <section className="cards" >
            
            <ul className="cards__items">
                {
                dataHousing.map(({ id, title, cover }) => (
                    <Link key={id} to={`/Housing/${id}`}>
                        <li  className="cards__item">
                            <div className="cards__img">
                                <img src={cover}  alt="" />            
                            </div>
                            <h2>{title}</h2>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}