import React from "react"
import Navbar from "./airbnb/src/components/Navbar"
import Hero from "./airbnb/src/components/Hero"
import Card from "./airbnb/src/components/Card"
import data from "./airbnb/src/data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}