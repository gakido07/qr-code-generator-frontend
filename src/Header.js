import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuora} from "@fortawesome/free-brands-svg-icons";
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header_content">
                <div>
                <FontAwesomeIcon className="header_icon" icon={faQrcode}/>
                </div>
                <div>
                <h2>QR CODE GENERATOR</h2>
                </div>
                
            </div>  
        </div>
    )
}

export default Header;
