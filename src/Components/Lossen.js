import React from "react"
import losgif from "../images/unloading_coal_animation2.gif"
import losData from "../data/losdata"
import ArticleText from "./ArticleText"

function Lossen() {
    const losComponents = losData.map(text => {
        return (
            <ArticleText key={text.id} tekst={text.tekst} class={text.onderwerp} />
        )
    })
    return (
        <main>
            <article className="lossen">
                <img src={losgif} alt=""></img>
                <div className="video">
                    <iframe allowFullScreen src="https://www.youtube.com/embed/ud6QiHw7SU0" title="lossen"></iframe>
                </div>
                {losComponents}                
            </article>            
        </main>
    )
}

export default Lossen 
