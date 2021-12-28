import React from "react"

function HomeText(props) {
    const nameClass = `lakes ${props.class}`
    return (
        <section className={nameClass}>
            {props.tekst}
        </section>
    )
}

export default HomeText
