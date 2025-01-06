import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Category } from "../../components/Category";
import { CategoryCard } from "../../components/CategoryCard";
import { Dowloand } from "../../components/Dowloand";
import { IfoodsCard } from "../../components/IfoodsCard";
import { useFetch } from "../../hooks/useFetch";

export const Home = () => {

    const uri = "https://raw.githubusercontent.com/Guilhermesoliveira21/api_restarant/main/db.json";

    const { data, loading } = useFetch(uri);
    const [filter, setFilter] = useState({})
    const [pratos, setPratos] = useState({});

    const [load, setLoad] = useState(true);


    function toggleCategory(event) {
        const id = event.target.alt;
        const name = event.target.title
        setFilter({
            id,
            name
        });
    }

    async function filtro() {
        setLoad(true)

        try {
            const response = await data.menu.filter((cat) => parseInt(cat.category_id) === parseInt(filter.id))
            const resp = response.map((i) => i.items)
            setPratos(resp[0]);
            setLoad(false);
        } catch (error) {

        }
    }

    useEffect(() => {
        filtro();

    }, [filter])


    return (
        <>
            <Banner />
            {loading ? 'Carregando' : <>
                <Category title="Categorias mais populares do IFOODS & DRINKS 🤩"></Category>
                <CategoryCard data={data.category} onClick={toggleCategory} />

                {filter.name === undefined ? (
                    <>
                        <Category title="Categorias mais populares do IFOODS & DRINKS 🤩"></Category>
                        <IfoodsCard data={data.home} loading={loading} />
                    </>
                ) : (
                    <>

                        <Category title={`Categoria ${filter.name} 🤩`}></Category>
                        <IfoodsCard data={pratos} loading={load} />

                    </>
                )}



                <Category title="Restarantes Populares"></Category>
                <CategoryCard data={data.restarants.restarant} />

                <Dowloand />

            </>}
        </>
    );
}