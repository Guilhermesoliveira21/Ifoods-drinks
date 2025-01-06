import styled from "styled-components";
import { colors } from "../../theme/colors";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;

    position: relative;
`;

export const ContainerHeaderTop = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: aqua;

    border-radius: 0 0 1rem 1rem;
    background-color: ${colors.white.secundary};

    border: 1px solid #ccc;
    border-top: none;

`;

export const HeaderMenu = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Logo = styled.div`

    height: 50px;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: ${colors.orange.primary};

`;

export const ContainerLogo = styled.div`

    display: flex;
    align-items: center;
    /* justify-content: center; */

    gap: 1rem;

    div {
        display: flex;
        align-items: center;

        
        p{
            text-transform: uppercase;

            font-size: 16px;
            font-weight: 700;

            color: ${colors.black.secundary};
            
            span {
                color: ${colors.orange.primary};
            }

        }

    }
`;

export const Navegation = styled.nav`

    display: flex;
    align-items: center;
    justify-content: end;
    
    gap: 2rem;

    @media (max-width: 768px) {

        display: none;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: end;

        list-style: none;

        gap: 4px;
    }

`;

export const LinkStyle = styled(Link)`

    color: ${colors.black.secundary};
    font-weight: 400;

    text-decoration: none;

    padding: 10px 16px;

    transition: .2s;

    border-radius: 20px;
    

    &:hover {
        /* background-color: ${colors.orange.primary}; */
        color: ${colors.orange.primary};
    }

    &.active {
        /* background-color: ${colors.orange.primary}; */
        color: ${colors.orange.primary};
    }

`;

export const ContainerSearchCart = styled.div`

    display: flex;
    align-items: center;

    gap: 1rem;
    position: relative;

    @media (max-width: 768px) {

        display: none;
    }

`;

export const Search = styled.div`

    background-color: ${colors.white.secundary};

    border: 1px solid #ccc;

    border-radius: 50%;
    padding: 10px;

    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: .2s;



`;

export const InputDelay = styled.div`

    transition: .2s;

`;

export const ContainerResults = styled.div`

    position: absolute;

    left: 0;
    top: 44px;

    /* background-color: aqua; */
    border: 1px solid #ccc;
    width: 100%;
    padding: 4px 6px;

    p {
        font-size: 14px;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }
    }

`;

export const ContainerHeaderMobile = styled.div`

    position: relative;

    @media (min-width: 768px) {

display: none;
}


`;

export const HeaderMobile = styled.div`

    position: relative;

    position: absolute;
    background-color: ${colors.black.secundary};
    left: 0;
    top: 100px;

    z-index: 9909999999999;
    height: 89vh;
    width: 100%;

    border-radius: 10px;

    transition: .3s;

    overflow: hidden;

    ul {
        /* background-color: beige; */
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        list-style: none;

        li {
            margin: 20px;
            font-size: 1.4rem;
            font-weight: 800;
        }
    }


`;

export const LinkStyleHeader = styled(Link)`

    color: ${colors.white.primary};
    font-weight: 400;

    text-decoration: none;

    padding: 10px 16px;

    transition: .2s;

    border-radius: 20px;
    

    &:hover {
        /* background-color: ${colors.orange.primary}; */
        color: ${colors.orange.primary};
    }

    &.active {
        /* background-color: ${colors.orange.primary}; */
        color: ${colors.orange.primary};
    }

`;