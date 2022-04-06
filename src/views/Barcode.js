import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";

import useGenerate from "../hooks/useGenerate";
import { StyledQr } from "./Qr";

export default function Barcode () {

    const [text, setText] = useState("");
    const [loadedImage, setLoadedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const { generate, error, image } = useGenerate({
        url: '/barcode',
        parameters: {
            'text': text
        }
    });

    const clearInput = () => {
        const textbox = document.querySelector(".text");
        setText("");
        textbox.value = "";
    }

    useEffect(() => {
        if (image) {
            setTimeout(() => {
                setLoading(false);          
                setLoadedImage(image)
            }, 1500)
        }
    }, [image, loading])

    useEffect(() => {
        if (error) {
            setLoading(false);
        }
    }, [error, loading]);

    return (
        <StyledBarcode
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        >
            <div className="image-container">
                { error && <div>Invalid input</div> }
                { loadedImage && <img alt="lol" download src={`data:image/jpeg;charset=utf-8;base64,${loadedImage}`} /> }
            </div>
            <div className="form-container">
                <form>
                    <input className="text" onClick={() => clearInput()} type="text" name="text" required 
                    onChange={(event) => setText(event.target.value)}
                    />
                    <button type="submit"
                    onClick={(event) => {
                        event.preventDefault();
                        setLoading(true)
                        setLoadedImage(null);
                        generate();
                    }}
                    disabled = { text.length <= 0 ? true : false }
                    >
                        { !loading && <p>Generate</p> }
                        { loading && <Loader /> }
                    </button>
                </form>
            </div>
        </StyledBarcode>
    );
}

const StyledBarcode = styled(StyledQr)`
    input {
        display: block;
        margin: auto;
        height: 4rem;
        width: 70%;
        margin-bottom: 5vh;
    }

    .image-container {
        > div {
            color: inherit
        }
    }
`