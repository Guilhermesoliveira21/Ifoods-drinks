import { useState } from "react"
import { Card, CardNamePrice, Container, Descont, ImageCard } from "./styles"

export const IfoodsCard = ({data, loading}) => {

    console.log(data)

    return (
        <>
        {loading ? 'Carregando' : 
        
        <>
        
        <Container>
         
                {data.map((p) => {
                return (
            <Card>
                <Descont>
                    <p>-20%</p>
                </Descont>
                <ImageCard src={p.image} alt="" />
            
                <CardNamePrice>
                    <h3>{p.name}</h3>
                    <h4>R$ {p.price}</h4>
                </CardNamePrice>

            </Card>

                )
            })}
              
        </Container>
        
        </>

        }
        </>
    )
}