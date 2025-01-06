import styled from "styled-components";
import { colors } from "../../theme/colors";

export const ContainerBanner = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 2rem;

    margin-top: 1rem 0;

    box-shadow: 0 0 4px #f4f4f4;
    border-radius: 8px;

    background-color: #EEEEEE;

`;

export const ContainerContent = styled.div`

    width: 60%;

    p {
        font-size: 16px;
        color: ${colors.orange.primary};
        font-weight: 700;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 2rem;
        color: ${colors.black.secundary};
        line-height: 44px;

        font-weight: 700;

        
        span {
            color: ${colors.orange.primary};
            margin-left: 8px;
        }
    }

`;

export const ContainerImage = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;


    img {

        width: 100%;
    }

`;

export const ButtonStyle = styled.button`

    margin-top: 4rem;

    cursor: pointer;

    width: 50%;
    padding: 10px;

    background-color: ${colors.black.secundary};
    color: ${colors.white.primary};
    font-weight: 700; 
    border-radius: 10px;

    border: none;

`;