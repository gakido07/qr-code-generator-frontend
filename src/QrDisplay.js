import React, { useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
// import "./QrDisplay.css";

function QrDisplay() {


    const [rawText, setRawText] = useState('');

    const baseURL = "https://qr-code-generator-1.herokuapp.com"


    const startSpinner = () => {
        const spinner = document.querySelector(".svg_spinner")
        if(rawText.length > 1 && !spinner.classList.contains("spinning")){
            spinner.classList.add("spinning")
        }
    }


    const stopSpinner = () => {
        const spinner = document.querySelector(".svg_spinner")
        if(spinner.classList.contains("spinning")){
            spinner.classList.remove("spinning")
        }  
    }



    return (
        <QrDisplayStyled>
<div className="qr_image_container">
                {
                    rawText? (
                <a download href={`${baseURL}/newQrCode/?barcode=${rawText}`}
                onLoad={()=>{
                    stopSpinner()
                }}
                >

                        <img alt="Enter text to encrypt" height="100%" width="90%" className={rawText? ("show"):("hidden")} src={`${baseURL}/newQrCode/?barcode=${rawText}`}></img>
                </a>

                    ):
                    (
                        <div className="hint">
                            <p>Qr code will display here</p>
                            
                        </div>
                    )
                }
                
            </div> 
            <div className="input_box_container">
            <FontAwesomeIcon icon={faSpinner}
            
            className="svg_spinner"/>
                <div>
                <input type="text" placeholder="Enter Text to generate qr code" onChange={(event) => {
                    if(event.target.value.length > 1){
                        startSpinner()
                    }
                    setRawText(event.target.value)
                }}>
                </input>
                </div>
            </div>  
            </QrDisplayStyled>
    )
}

export default QrDisplay


const QrDisplayStyled = styled.div`
    width: 100%;
    display: block;
    padding-top: 2em;
    height: fit-content;
    min-height: 25em;

    @keyframes animateSpinner {
        from{
            transform: none;
        }
        to{
            transform: rotate(360deg);
        }
    }

    .qr_image_container{
        width: 15em;
        height: 15em;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        margin: auto;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }


    .hint{ 
        padding-top: 40%;
        color: rgb(133, 129, 124);
    }
    
    
    .input_box_container{
        margin-top: 1em;
        display: block;
    }
    
    .input_box_container svg{
        margin-bottom: 1em;
        color: rgb(92, 107, 112);
        font-size: 25px;
    }
    
    .input_box_container .svg_spinner.spinning{
        animation-name: animateSpinner;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-delay: 0s;
    }
    
    
    .input_box_container input{
        height: 5em;
        border-radius: 10px;
        outline: none;
        width: 20%;
        border: none;
        background-color: rgb(189, 189, 189);
        padding-left: 5%;
        padding-right: 5%;
    }
    
    
    .hidden{
        display: none;
    }
    
    
    .show{
        display: block;
        margin: auto;
    }
    
    
    
    @media only screen and (max-width: 1000px){
    
        .qr_image_container{
            width: 50%;
        }
    
        .input_box_container input{
            width: 70%;
        }
    
    }
    
    
    @media only screen and (max-width: 480px){
        height: 27em;
        margin-top: 4em;

        .qr_image_container{
            width: 15em;
            height: 50%;
        }
    
    
        .input_box_container input{
            width: 80%;
            height: 9em;
        }
    
    }
`;
