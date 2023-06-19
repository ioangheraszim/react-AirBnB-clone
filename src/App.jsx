import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {

  const theData = data.map(item => {
    return (
      <Card 
        img={item.coverImg} 
        price={item.price}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}    
      />
    )
  })

  return (
    <main className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {theData}
      </section>
      
    </main>
  )
}

export default App
