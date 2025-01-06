import { Container, ContainerCategory } from "./styles"

export const Category = ({title, children}) => {
    return (

        <Container>
            <ContainerCategory>{title}</ContainerCategory>
            <div>
                {children}
            </div>
        </Container>

    )
}