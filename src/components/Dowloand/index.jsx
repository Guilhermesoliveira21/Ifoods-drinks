import baixar from '../../assets/baixar.png'
import { ButtonStyle } from './styles';
import { ContainerBanner, ContainerContent, ContainerImage } from './styles';

export const Dowloand = () => {
    return (

        <ContainerBanner>
            <ContainerImage>
                <img src={baixar} alt="" />
            </ContainerImage>
            <ContainerContent>
                <p>Baixe o App Agora!</p>
                <h2>Aproveite as melhores ofertas e serviços  
                    <span>
                        diretamente no seu celular.
                    </span>
                </h2>

                <ButtonStyle>Baixe Agora</ButtonStyle>

            </ContainerContent>
        </ContainerBanner>

    );
}