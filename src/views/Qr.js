import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Loader from "../components/Loader";
import useGenerate from "../hooks/useGenerate";

export default function Qr () {

    const [text, setText] = useState("");
    const [loadedImage, setLoadedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const { generate, error, image } = useGenerate({
        url: '/qr',
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

    return (
        <StyledQr
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        >
            <div className="image-container">
                { error && <div>Error occured</div> }
                { loadedImage && 
                <a download href={`data:image/jpeg;charset=utf-8;base64,${loadedImage}`}>
                    <img download alt="lol" src={`data:image/jpeg;charset=utf-8;base64,${loadedImage}`} /> 
                </a>
                }
            </div>
            <div className="form-container">
                <form>
                    <textarea className="text" type="text" onClick={() => clearInput()} name="text" required 
                    onChange={(event) => setText(event.target.value)}
                    />
                    <button 
                    type="submit" 
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
        </StyledQr>
    );
}

export const StyledQr = styled(motion.div)`
    height: 83vh;
    width: 100%;

    .image-container {
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 0 0 2px ${props => props.theme.border};
        border: 2px solid ${props => props.theme.animatedBorder};
        width: 25%;
        margin: auto;
        margin-top: 7vh;
        margin-bottom: 5vh;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }
    }

    textarea {
        display: block;
        margin: auto;
        height: 4rem;
        width: 70%;
        margin-bottom: 5vh;
    }

    .form-container {
        margin: auto;
        width: 30%;
    }

    button {
        padding: 20px 20px;
        display: flex;
        color: ${props => props.theme.color};
        justify-content: center;
        align-items: center;
	    background: none;
	    border: none;
        width: 100%;
	    position: relative;
	    text-transform: uppercase;
	    font-weight: bold;
	    letter-spacing: 3px;
	    cursor: pointer;
	    &:after, &:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border: 2px solid ${props => props.theme.animatedBorder};
		transition: transform .2s; 
        }
	    &:after {
            transform: translate(3px, 3px);
        }
	    &:before {
		    transform: translate(-3px, -3px);
        }
	    &:hover {
            &:after, &:before {
                transform: translate(0);
            }
        }

        :disabled {
            color: ${props => props.theme.disabledButton};
        }
		
    }

    @media only screen and (max-width: 480px){

        .image-container {
            width: 70%;
        }

        .form-container {
            width: 70%;
        }

        button {
            width: 100%;
        }
    }
`;