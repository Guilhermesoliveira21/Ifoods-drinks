import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`

    position: relative;

    margin-bottom: 2rem;

`;

export const ContainerBanner = styled.div`

    &::before {
        content: '';
        width: 100%;
        height: 400px;
        background-color: ${colors.black.secundary};
        opacity: .7;
        padding: 1rem 4rem;
        position: absolute;
        left: 0;

    }
    background-image: url('https://www.acidadeon.com/tudoep/wp-content/uploads/sites/10/2023/12/lanches_gratis_1200x675_27102023115024.jpg');
    background-size: cover;
    background-position: 0px;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 1rem 8rem;
    position: relative;
`;

export const ContainerContent = styled.div`
    position: relative; /* Certifique-se de que o conteúdo esteja posicionado adequadamente */
    z-index: 2; /* Deve ser maior que o z-index implícito do banner */
    width: 60%;

    h1 {
        color: ${colors.orange.primary};
        font-size: 2.6rem;
    }

    h2 {
        color: ${colors.white.primary};
        font-size: 1.9rem;
    }
`;

export const ContainerButton = styled.button`

    display: flex;
    align-items: center;
    gap: 1.2rem;

    background-color: transparent;
    border: none;

    cursor: pointer;

    margin-top: 1rem;

    button{
        background-color: transparent;
        border: 1.4px solid ${colors.white.secundary};
        color: ${colors.white.secundary};
        font-weight: 600;
    
        padding: 8px 16px;
        border-radius: 12px;
    }


`;

export const ContainerImage = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40%;

    z-index: 999;
    position: relative;

    img {
        width: 100%;
        border-radius: 30px;

        box-shadow: 0 0 4px #f3f3f3;
    }

`;

export const Avaliacao = styled.div`

    position: absolute;
    left: -20px;
    bottom: -20px;

    border-radius: 8px;

    padding: 3rem 2rem;
    background-color: ${colors.white.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4{
        font-size: 2.8em;
        color: ${colors.black.secundary};
        font-weight: 400;
    }

`;

export const ContainerFuncionamento = styled.div`

    position: absolute;
    left: 0px;
    bottom: -20px;
    padding: 10px 20px;

    border-radius: 0 8px 8px 0;

    background-color: ${colors.orange.primary};
    color: ${colors.white.primary};

`;