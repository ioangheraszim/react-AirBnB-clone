import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    
    return (
        <section className="card">
            {
                badgeText && 
                <div className="card-badge">{badgeText}</div>
            }
            
            <img 
                src={`./src/assets/${props.coverImg}`} 
                className="card-image" 
            />
            <div className="card-stats">
                <img src="../src/assets/star.png" className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </section>       
    )
}