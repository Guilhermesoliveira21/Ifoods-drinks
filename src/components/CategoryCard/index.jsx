import { Card, CardBody, CardImg, Container } from "./styles"

export const CategoryCard = ({data, loading, ...rest}) => {

    // console.log(data)

    return (
        <>
        
            <Container>
    
                {data.map((d) => (
                <Card key={d.name}>
                    <CardImg {...rest}>
                        <img src={d.image} alt={d.id} title={d.name}/>
                    </CardImg>
                    <CardBody {...rest}>
                        <p>{d.name}</p>
                    </CardBody>
                </Card>

                ))}
                
            </Container>
        
        </>
    )
}