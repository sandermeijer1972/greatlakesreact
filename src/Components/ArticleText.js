import React from "react"

function HomeText(props) {
    const allClasses = `lakes ${props.class}`
    return (
        <section className={allClasses}>
            {props.tekst}
        </section>
    )
}

export default HomeText
