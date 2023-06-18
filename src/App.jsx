import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {

  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Card 
        img="./src/assets/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      
      />
    </main>
  )
}

export default App
