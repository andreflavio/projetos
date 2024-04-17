import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../componets/Login";
import Cadastro from "../componets/Cadastro";
import Adm from "../componets/Adm";

export default function AppRoutes(){
    return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Cadastro" element={<Cadastro/>}></Route>
            <Route path="/Acesso" element={<Adm />}></Route>
        </Routes>
     </BrowserRouter>
    );
}