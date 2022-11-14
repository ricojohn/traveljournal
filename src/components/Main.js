import React from "react";

import {FaMapPin} from "react-icons/fa"
export default function Main (mountains){

    const location = [mountains.location]

    const capitalized = location.map((name => {
        return name.toUpperCase(name)
    }))

    

    return(
        <main className="main">
            <img src={mountains.imageUrl} alt="fuji"/>
            <div className="main-text">
                <section>
                    <FaMapPin className="icon"/> 
                    <span> {capitalized} </span>
                    <a href={mountains.googleMapsUrl} className="main-map">View on Google Maps</a>
                </section>
            <h1 className="main-title">{mountains.title}</h1>
            <span className="main-date">{mountains.startDate} - {mountains.endDate}</span>
            <p className="main-desc">{mountains.description}</p>
            </div>
        </main>
    )
}