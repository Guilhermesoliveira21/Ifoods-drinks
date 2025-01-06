import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Restarants } from "../pages/restarants";
import { Header } from "../components/Header";

export const CreateRoutes = () => {
    return (

        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/restarantes" element={<Restarants />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}