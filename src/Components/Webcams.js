import React from "react"
import camData from "../data/camdata"
import CamList from "./CamList"
import plattegrond from "../images/cameras.gif"

function Webcams() {
    const cameraComponents = camData.map(item => {
        return (
            <CamList key={item.id} camera={item} />
        )
    })
    return(
        <main>
            <article className="camera">
                <div className="camtext">
                    <div>Op verschillende plekken rondom de Great Lakes staan webcams op gesteld, die 24/7 de voorbij varende boten filmen. De camera's van de best bekeken live-streams zijn op het volgende kaartje ingetekend:</div>
                    <img alt="" src={plattegrond}></img>
                </div>
                {cameraComponents}
            </article>
        </main>
    )
}

export default Webcams 
