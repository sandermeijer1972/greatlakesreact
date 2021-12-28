import React from "react"

function CamList(props) {
    return (
        <section className="webcam">
            <div className="plaats">{props.camera.plaats}</div>
            <div className="positie">plek op de kaart: {props.camera.positie}</div>
            <div className="info">{props.camera.info}</div>
            <div className="video"> 
                <iframe allowFullScreen src={props.camera.youtube} title={props.camera.id}></iframe>
            </div>
        </section>
    )
}

export default CamList
