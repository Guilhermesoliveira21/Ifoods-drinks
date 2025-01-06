import { BannerDetail } from "../../components/BannerDetail";
import { useFetch } from "../../hooks/useFetch";
import {Category} from '../../components/Category'
import { Input } from "../../components/Input";

export const Restarants = () => {

    const uri = "https://raw.githubusercontent.com/Guilhermesoliveira21/api_restarant/main/db.json";

    const {data, loading} = useFetch(uri);

    return(
        <>
            {loading ? 'Carregando...':
            
            <>
            <BannerDetail data={data.restarants.restarant}/>

            <Category title={`Todas as ofertas ${data.restarants.restarant[1].name}`}>
              
            </Category>
            
            </>
            
            }
        </>
    );
}