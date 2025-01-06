import styled from "styled-components";
import { colors } from "../../theme/colors";

export const ContainerBanner = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 2rem;

    border: 1px solid #ccc;
    border-radius: 8px;

    background-color: ${colors.black.secundary};

    @media (max-width: 768px) {

        padding: 1rem;
        /* flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        display: flex; */

    }

`;

export const ContainerContent = styled.div`

    width: 60%;

    @media (max-width: 1329px) { 
          width: 70%;
        }
        @media (max-width: 789px) { 
          width: 150%;
          display: none;
        }
        

    p {
        font-size: 14px;
        color: ${colors.white.primary};
        font-weight: 600;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 2.4rem;
        color: ${colors.white.secundary};
        line-height: 44px;

        @media (max-width: 1329px) { 
            font-size: 2rem;
            font-weight: 700;

            line-height: 36px;
        }

        @media (max-width: 999px) { 
            font-size: 1.6rem;
            font-weight: 700;

            line-height: 32px;
        }

        @media (max-width: 789px) { 
            font-size: 1.6rem;
        }
        span {
            color: ${colors.orange.primary};
        }
    }

`;

export const ContainerImage = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 768px) {

        padding-bottom: 1rem;

        align-items: start;
        justify-content: start;
        display: flex;

    }


    img {

        width: 120%;

        @media (max-width: 1329px) { 
            width: 100%;
        }
        @media (max-width: 999px) { 
            width: 80%;
        }

        @media (max-width: 789px) { 
            width: 100%;
            margin-left: -40px;
        }
   
    }

`;