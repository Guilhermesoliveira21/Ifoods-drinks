import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`

    display: flex;
    align-items: center;

    gap: 1rem;
    width: 100%;

    padding-bottom: 3rem;

    @media (max-width: 788px) {
        overflow-x: scroll;

        &::-webkit-scrollbar {
        display: none; 
    }

    }   


`;

export const Card = styled.div`

    width: 200px;
    height: 160px;


    cursor: pointer;

    @media (max-width: 1400px) {
        width: 100%;
        height: 80px;
    }

    @media (max-width: 788px) {
        width: 100%;
        height: 80px;
    }

`;

export const CardImg = styled.div`

    width: 100%;
    height: 100%;
    /* background-color: black; */

    border-radius: 8px 8px 0 0;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    @media (max-width: 788px) {
            width: 160px;
    }

    img {
        width: 160%;
        
        object-fit: cover;

        @media (max-width: 1400px) {
        width: 100%;
    }

        @media (max-width: 788px) {
            width: 100%;
    }
    }

`;

export const CardBody = styled.div`

    padding: 6px 10px;
    text-align: center;

    background-color: ${colors.orange.primary};
    color: ${colors.white.secundary};

    border-radius: 0 0 8px 8px;

    @media (max-width: 768px) {
            width: 160px;
    }

    p {
        font-weight: 600;

        @media (max-width: 1400px) {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

`;