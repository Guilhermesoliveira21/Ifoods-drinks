import { IoFastFoodSharp } from "react-icons/io5"
import { ContainerHeader, ContainerHeaderTop, Logo, HeaderMenu, ContainerLogo, Navegation, LinkStyle, ContainerSearchCart, Search, InputDelay, ContainerResults, ContainerHeaderMobile, HeaderMobile, LinkStyleHeader } from "./styles"
import { colors } from "../../theme/colors"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaBars, FaShoppingCart } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
import { Input } from "../Input"
import { useFetch } from "../../hooks/useFetch"
import { RiCloseFill } from "react-icons/ri"

export const Header = () => {

    const uri = "https://raw.githubusercontent.com/Guilhermesoliveira21/api_restarant/main/db.json";

    const [isActive, setIsActive] = useState('Página inicial');
    const [search, setSearch] = useState('');
    const [results, setResults] = useState();
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenHeader, setIsOpenHeader] = useState(false);

    function openMenu() {
        setIsOpenHeader((header) => !header);
    }

    const { data, loading, erro } = useFetch(uri);

    function toggleLinkActive(event) {
        setIsActive(event.target.text)
    }

    function toggleOpenSearch() {
        setIsOpenSearch((s) => !s)
    }

    async function fetchSearch() {

        if (!data || !data.menu) return;

        const responseData = data.menu.map((s) => s.items);
        const nameData = responseData.flatMap((subArray) => 
            subArray.map((item) => item.name)
        );

       if(search === '') {
            setResults([]);
       }else {
        const filterNames = nameData.filter((name) => 
            name.toLowerCase().includes(search.toLowerCase())
        );
    
        setResults(filterNames);
       }
    }

    useEffect(() => {
        if (!loading) {
            fetchSearch();
        }
    }, [data, search]);


    return (
        <>

            <ContainerHeader>
                {/* <ContainerHeaderTop>
                    <div>
                        <p>Ganhe 5% de desconto no seu primeiro pedido</p>
                    </div>
                    <div>
                        <p>Pedidos</p>
                    </div>
                </ContainerHeaderTop> */}
                <HeaderMenu>
                    <ContainerLogo>
                        <Logo>
                            <IoFastFoodSharp color={colors.white.primary} size={32} />
                        </Logo>
                        <div>
                            <p>Ifoods & <span>Drinks</span></p>
                        </div>
                    </ContainerLogo>
                    <Navegation>
                        <ul onClick={toggleLinkActive}>
                            <li><LinkStyle to='/' className={isActive == 'Página inicial' ? 'active' : ''}>Página inicial</LinkStyle></li>
                            <li><LinkStyle to='/restarantes' className={isActive == 'Restarantes' ? 'active' : ''}>Restarantes</LinkStyle></li>
                            <li><LinkStyle className={isActive == 'Pratos' ? 'active' : ''}>Pratos</LinkStyle></li>
                        </ul>
                    </Navegation>
                    <ContainerSearchCart>
                        {isOpenSearch &&

                            <>

                                <InputDelay>
                                    <Input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder='Pesquisar'
                                    />
                                </InputDelay>

                                <ContainerResults>
                                    {results.map((res, index) => (
                                        <p key={index}>{res}</p>
                                    ))}
                                </ContainerResults>

                            </>

                        }
                        <Search onClick={toggleOpenSearch}>
                            <IoIosSearch size={20} color={colors.black.secundary} />
                        </Search>
                        <div>
                            <FaShoppingCart size={20} color={colors.black.secundary} />

                        </div>

                    </ContainerSearchCart>
                    <ContainerHeaderMobile>
                    <div onClick={openMenu}>
                        {!isOpenHeader ? <FaBars size={26}/> : <RiCloseFill size={26}/>}
                    </div>
                    
                    </ContainerHeaderMobile>
                </HeaderMenu>
                    {isOpenHeader && <HeaderMobile>
                        <ul onClick={toggleLinkActive}>
                            <li><LinkStyleHeader to='/' className={isActive == 'Página inicial' ? 'active' : ''}>Página inicial</LinkStyleHeader></li>
                            <li><LinkStyleHeader to='/restarantes' className={isActive == 'Restarantes' ? 'active' : ''}>Restarantes</LinkStyleHeader></li>
                            <li><LinkStyleHeader className={isActive == 'Pratos' ? 'active' : ''}>Pratos</LinkStyleHeader></li>
                        </ul>
                    </HeaderMobile>}
            </ContainerHeader>

        </>
    )
}