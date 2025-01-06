import banner from '../../assets/banner.png'
import { ContainerBanner, ContainerContent, ContainerImage } from './styles';

export const Banner = () => {
    return (

        <ContainerBanner>
            <ContainerContent>
                <p>Promoção Imperdível, A Fome Bateu?</p>
                <h2>Deixe o iFood & Drinks Resolver! <br />
                    <span>
                        Com até 50% de desconto.
                    </span>
                </h2>

            </ContainerContent>
            <ContainerImage>
                <img src={banner} alt="" />
            </ContainerImage>
        </ContainerBanner>

    );
}