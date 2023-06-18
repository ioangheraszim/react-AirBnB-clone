import React from "react";

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.img} className="card-image" />
            <div className="card-stats">
                <img src="../src/assets/star.png" className="card-star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>       
    )
}