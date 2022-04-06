import styled from "styled-components";
import { faQrcode, faBarcode } from '@fortawesome/free-solid-svg-icons';

import NavCard from "../components/NavCard";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <StyledHome
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        >
            <NavCard icon={faQrcode} link="/qr">
                Qr Code
            </NavCard>
            <NavCard icon={faBarcode} link="/barcode">
                Bar Code
            </NavCard>
        </StyledHome>
    );
}

const StyledHome = styled(motion.div)`
    height: 90vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 480px){
        height: 80vh;
        display: block;
        padding-top: 10vh;
    }
`;