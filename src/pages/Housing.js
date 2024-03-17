
import Footer from "../components/Footer";
import Header from "../components/Header"; 
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import dataHousing from "../data/housing.json";
import booking_icon from "../assets/booking.svg";

import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useState } from "react";
import Calendar from "../components/Calendar";

import Parse from "parse/dist/parse.min.js";

export default function Housing(){

    Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    // Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
    Parse.initialize(
        process.env.REACT_APP_BACK4APP_APP_ID, // This is your Application ID
        process.env.REACT_APP_BACK4APP_JS_KEY, // This is your Javascript key
        process.env.REACT_APP_BACK4APP_MASTER_KEY,   // This is your Master key (never use it in the frontend)
    );
    const currentUser = Parse.User.current();
    
    const {id} = useParams()
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);

    const toggleCalendar = () => {
        setCalendarIsOpen(!calendarIsOpen);
    }
    console.log("calendar open:", calendarIsOpen);
    let selectedId = dataHousing.find(data => (data.id === id));
    
    return selectedId ? (
        <div className="housing">
            <Header />
            <main className="housing__content">
                
                <Carrousel
                    imgSrc={selectedId.pictures}
                    alt={selectedId.title}
                />
                <div className="housing__booking">
                    <p>Réserver ce produit</p>
                    <img 
                        src={booking_icon} 
                        alt="booking icon" 
                        className="housing__bookingIcon" 
                        onClick={toggleCalendar}
                    />
                    {calendarIsOpen ? <Calendar /> : null}
                </div>

                <section className="housing__details">
                    <div className="housing__detailsHeader">
                        <div className="housing__detailsTitle">
                            <h2>{selectedId.title}</h2>
                            <p>{selectedId.location} </p>
                            <ul>
                                {
                                    selectedId.tags.map((tag, index) => (
                                        <li key={index} >
                                            {tag}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="housing__detailsHost">
                            <div className="housing__detailsHostName">
                            
                                <div>
                                    <p>{selectedId.host.name.split(" ")[0]} </p>
                                    <p>{selectedId.host.name.split(" ")[1]} </p>
                                </div>
                                
                                <img src={selectedId.host.picture} alt=""></img>
                            </div>
                            <Rating 
                                rating={selectedId.rating}
                            />
                        </div>
                    </div>
                    <div className="housing__detailsArticle">
                        
                            <Collapse
                                
                                title="Description"
                                text={selectedId.description}
                                type="text"
                            />
                        
                        
                            <Collapse 
                               
                                title="Equipements"
                                text={selectedId.equipments}
                                type="list"
                            />
                       
                    </div>
                       
                </section>
            </main>
            <Footer />
        </div>
    ) : (
        <NotFound />
    )
    
}