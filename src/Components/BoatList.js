import React from "react"

function BoatList(props) {
    return (
        <article className="boot">
            <div className="titel">{props.boat.naam}</div>
            <div className="fotos">
                <img src={props.boat.media.foto1} alt=""></img>
                <img src={props.boat.media.foto2} alt=""></img>
                <img src={props.boat.media.foto3} alt=""></img>
            </div>
            <div className="info">
                <div className="tekst">
                    <p>naam: {props.boat.naam}</p>
                    <p>bedrijf: {props.boat.bedrijf}</p>
                    <p>bouwjaar: {props.boat.bouwjaar}</p>
                    <p>lengte: {props.boat.lengte.feet} feet / {props.boat.lengte.meter} meter</p>
                    <p>breedte: {props.boat.breedte.feet} feet / {props.boat.breedte.meter} meter</p>
                    <p>laadcapaciteit: {props.boat.laadcapaciteit} ton</p>
                    <p>motorvermogen: {props.boat.motorvermogen}</p>
                </div>
                <div className="video">
                    <iframe allowFullScreen src={props.boat.media.youtube}></iframe>
                </div>
            </div>
            <div className="weetjes">
                <p>{props.boat.weetjes.w1}</p>
                <p>{props.boat.weetjes.w2}</p>
            </div>
        </article>
    )
}

export default BoatList
