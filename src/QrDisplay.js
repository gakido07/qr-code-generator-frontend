import React, { useState } from 'react';
import "./QrDisplay.css";

function QrDisplay() {


    const [rawText, setRawText] = useState('');


    const baseURL = "https://qr-code-generator-1.herokuapp.com"




    return (
        <div className="qr_display">
            <div className="qr_image_container">
                {
                    rawText? (
                <a download href={`${baseURL}/newQrCode/?barcode=${rawText}`}>

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
                    
                <div>
                <input type="text" placeholder="Enter Text to generate qr code" onChange={(event) => setRawText(event.target.value)}>
                </input>
                </div>
            </div>  
        </div>
    )
}

export default QrDisplay
