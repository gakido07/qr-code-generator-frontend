import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight  } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function NavCard({ children, icon, link }) {
    return (
        <Link to={link}>
            <StyledNavCard>
                <div className="icon">
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className="details">
                    <div>
                        <p>{ children }</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                </div>
            </StyledNavCard>
        </Link>
    )
}

const StyledNavCard = styled.div`
    height: 20rem;
    width: 17rem;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${props => props.theme.border};
    padding-top: 1%;
    text-align: left;
    position: relative;
    vertical-align: middle;
    transition: ease-in 0.2s;
    color: ${props => props.theme.color};

    .icon {
        height: 8rem;
        color: ${props => props.theme.iconColor};
        display: flex;
        justify-content: center;
        align-items: center;

        >svg {
            font-size: 60px;
        }
    }

    .details {
        position: relative;
        padding-left: 10%;
        height: 5rem;
        overflow: hidden;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 30%;
        font-family: 'Rubik Glitch';
        background-color: aliceblue;
        font-size: large;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        white-space: nowrap;
        transition: ease-in 0.2s;

        >div:first-of-type {
            margin-right: 2rem;
        }
        
    }

    :hover {
        transform: scale(1.1);
        transition: ease-in 0.2s;
        color: black;

        .details {
            width: 80%;
            transition: ease-in 0.2s;
            
        }
    }

    &::before,
    &::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid transparent;
        width: 0;
        height: 0;
    }

    &::before {
        top: 0;
        left: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover {
      /* color: blue; */
    }

    &:hover::before,
    &:hover::after {
      width: 100%;
      height: 100%;
    }

    &:hover::before {
      border-top-color: ${props => props.theme.animatedBorder};
      border-right-color: ${props => props.theme.animatedBorder};
      transition:
        width 0.25s ease-out,
        height 0.25s ease-out 0.25s;
    }

  &:hover::after {
    border-bottom-color: ${props => props.theme.animatedBorder};
    border-left-color: ${props => props.theme.animatedBorder};
    transition:
      border-color 0s ease-out 0.5s,
      width 0.25s ease-out 0.5s,
      height 0.25s ease-out 0.75s;
  }


  @media only screen and (max-width: 480px){
      margin: auto;
      height: 15rem;
      margin-bottom: 2em;
  }
`