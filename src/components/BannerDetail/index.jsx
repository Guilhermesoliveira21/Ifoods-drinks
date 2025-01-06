import { IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Avaliacao, Container, ContainerBanner, ContainerButton, ContainerContent, ContainerFuncionamento, ContainerImage } from "./styles"
import { FaStar } from "react-icons/fa";
import { colors } from "../../theme/colors";

export const BannerDetail = ({ data }) => {

    console.log(data[1]);
    return (
        <Container>
            <ContainerBanner>
                <ContainerContent>
                    <h1>{data[1].name}</h1>
                    <h2>{data[1].localization}</h2>
                    <ContainerButton>
                        <button>Estamos localizados</button>
                        <button>Deliver em 5 a 20 minutos</button>
                    </ContainerButton>
                </ContainerContent>
                <ContainerImage>
                    <img src="https://www.acidadeon.com/tudoep/wp-content/uploads/sites/10/2023/12/lanches_gratis_1200x675_27102023115024.jpg" alt="" />
                    <Avaliacao>
                        <h4>{data[1].avaliation}</h4>
                        <div>
                            <FaStar color={colors.orange.primary} />
                            <FaStar color={colors.orange.primary} />
                            <FaStar color={colors.orange.primary} />
                            <IoStarHalf color={colors.orange.primary} />
                            <IoStarOutline color={colors.orange.primary} />

                        </div>
                    </Avaliacao>
                </ContainerImage>
            </ContainerBanner>
            <ContainerFuncionamento>
                <p>Aberto: {data[1].open}</p>
            </ContainerFuncionamento>
        </Container>
    )
}