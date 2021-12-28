import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>1000-footers op de Great Lakes</h1>
            <nav>
                <Link to="/">
                    <div className="menu">Home</div>                    
                </Link>
                <Link to="boten">
                    <div className="menu">Boten</div>
                </Link>
                <Link to="lossen">
                    <div className="menu">Lossen</div>
                </Link>
                <Link to="webcams">
                    <div className="menu">Webcams</div>
                </Link>                 
            </nav>
        </header>
    )
}

export default Header
