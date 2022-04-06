import React from 'react';
import styled from 'styled-components';
import { isEqual } from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { theme } from '../context/Theme';


function Header({themeState, dispatch }) {
    return (
        <HeaderStyled>
            <div className="header_content">
                <div>
                <h2>QR CODE GENERATOR</h2>
                </div>
            </div>
            <div>
                <button
                onClick={() => {
                    if(isEqual(themeState, theme.darkTheme)) {
                        dispatch({type: 'LIGHT_THEME'});
                    }
                    else {
                        dispatch({type: 'DARK_THEME'});
                    }
                }}
                >
                    <FontAwesomeIcon icon={ isEqual(themeState, theme.darkTheme) ? faMoon : faSun }/>
                </button>
            </div>
        </HeaderStyled>
    )
}



const HeaderStyled = styled.header`
    height: 10vh;
    text-align: left;
    color: ${props => props.theme.border};
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-family: 'Rubik Glitch';
    font-weight: 900;
    font-size: 15px;
    padding-left: 5%;
    padding-right: 5%;

    .header_content{
        display: flex;
        border-bottom: 1px #696967 solid;
        width: 100%;
        white-space: nowrap;
    }



    @media only screen and (max-width: 480px){
        height: 12vh;
        font-size: 13px;
    }
`

export default Header;
