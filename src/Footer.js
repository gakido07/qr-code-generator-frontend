import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"



function Footer() {

    const date = new Date()
    return (
        <FooterStyled>
            <div className="footer_content">
            <p>{`${date.getFullYear()}`}</p>
            </div>    
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`
    height: 5em;
    color: rgb(255, 255, 255);
    background-color: rgb(92, 107, 112);
    text-align: center;
    margin-top: 4em;
    font-size: 12px;


    .footer_content{
        width: 100%;
        text-align: center;
    }


@media only screen and (max-width: 1000px){
    .footer_content{
        width: 18%;
    }
}

@media only screen and (max-width: 480px){

    .footer_content{
        width: 35%;
        margin-left: 40%;


        p{
            margin-right: 40%;
        }
    }

}
`

export default Footer
