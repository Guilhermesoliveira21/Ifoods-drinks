import styled from "styled-components";
import { colors } from "../../theme/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 1rem;

    width: 100%;
`;

export const Card = styled(Link)`

    position: relative;

    /* background-color: aqua; */
    border-radius: 20px;
    overflow: hidden;
    width: 30.6rem;
    height: 16rem;

    @media (max-width: 1800px) {

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        width: 22rem;
        height: 13rem;
    }

    @media (max-width: 789px) {
        width: 100%;
        height: 18rem;
    }

`;

export const Descont = styled.div`

    position: absolute;
    top: 0;
    right: 20px;
    padding: 2rem 1rem;

    /* height: 120px; */
    border-radius: 0 0 6px 6px;
    background-color: ${colors.black.secundary};

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9999;

    p{
        font-size: 1.2rem;
        color: ${colors.white.primary};
        font-weight: 600;
    }

`;

export const ImageCard = styled.img`

    filter: brightness(.5);

    object-fit: cover;
    width: 100%;

`;

export const CardNamePrice = styled.div`

    position: absolute;
    bottom: 30px;
    left: 20px;
    z-index: 999;

    h3 {
        color: ${colors.orange.primary};
        font-size: 1.4rem;
    }

    h4 {
        color: ${colors.white.primary};
    }

`;