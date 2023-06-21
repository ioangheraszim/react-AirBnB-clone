import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {

  const theData = data.map(item => {
    return (
      <Card
      key={item.id}
      // without the spread syntax more cluttered
      // item={item} 

      //with spread syntax less cluttered 
      {...item}
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
