import React from "react"
import homeData from "../data/homedata"
import HomeText from "./HomeText"
import landkaart from "../images/great-lakes-map.gif"

function Home() {
    const homeComponents = homeData.map(text => {
        return (
            <HomeText key={text.id} tekst={text.tekst} class={text.onderwerp} />
        )
    })
    return (
        <main>
            <article className="home">
                <img src={landkaart} alt=""></img>
                {homeComponents}                
            </article>            
        </main>
    )
}

export default Home 
