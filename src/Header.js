import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Header() {
    return (
        <HeaderStyled>
            <div className="header_content">
                <div>
                <FontAwesomeIcon className="header_icon" icon={faQrcode}/>
                </div>
                <div>
                <h2>QR CODE GENERATOR</h2>
                </div>
            </div>  
        </HeaderStyled>
    )
}



const HeaderStyled = styled.header`
    background: rgb(92, 107, 112);
    margin-top: -1.5em;
    height: 5em;
    text-align: left;
    color: white;
    display: flex;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    padding-top: 1em;
    font-family: 'Merriweather';
    font-weight: 900;
    font-size: 15px;

    .header_content{
        display: flex;
    }
    .header_content h2{
        margin-left: 5%;
    }


    .header_icon{
        margin-top: 1em;
        font-size: 30px;
        margin-left: 1em;
    }
`

export default Header;
