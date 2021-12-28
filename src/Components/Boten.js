import React from "react"
import boats from "../data/boats"
import BoatList from "./BoatList"

function Boten() {
    const boatComponents = boats.map(item => {
        return (
            <BoatList key={item.id} boat={item} />
        )
    })
    return (
        <main>
            {boatComponents}
        </main>
    )
}

export default Boten 
