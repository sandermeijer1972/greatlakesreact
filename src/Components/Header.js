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
                <div className="menu">Boten</div>
                <div className="menu">Lossen</div>
                <div className="menu">Webcams</div>
            </nav>
        </header>
    )
}

export default Header
