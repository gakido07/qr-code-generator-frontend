import styled from "styled-components";

export default function Loader() {
    return (
        <StyledLoader>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoader>
    );
}


const StyledLoader = styled.div`
    position: relative;
    width: 80px;
    height: 60px;
    margin-top: -1em;
    
    div {
        position: absolute;
        background-color: ${props => props.theme.color};
        width: 10px;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }

    div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }

    div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }

    @keyframes lds-facebook {
        0% {
          top: 8px;
          height: 64px;
        }
        50%, 100% {
          top: 24px;
          height: 32px;
        }
    }
`;