import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "./QrDisplay.css";

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
        <div className="qr_display">
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
        </div>
    )
}

export default QrDisplay
