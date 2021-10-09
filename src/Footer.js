import "./Footer.css"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

function Footer() {

    const date = new Date()
    return (
        <div className="footer">
            <div className="footer_content">
            <FontAwesomeIcon className="footer_icon" icon={faCopyright}/>
            <p>{`Daniel Ekara ${date.getFullYear()}`}</p>
            </div>    
        </div>
    )
}

export default Footer
