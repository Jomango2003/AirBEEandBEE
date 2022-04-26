import './style.css';
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data/data'

function CardData(){
  const cards = data.map(card => {
    return (
      <Card 
      key={card.id}
      //item={card}
      {...card}
      />
    )
  })
  return cards;
}

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
                <CardData />
            </section>
    </div>
  )
}

export default App;
