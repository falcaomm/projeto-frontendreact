import React from "react";
import Busca from "../Busca/Busca"
import { HeaderStyle, TitleHeader, Icone } from "./styles";
import { FaShoppingCart, FaHome } from 'react-icons/fa'


function Header(props) {
    const { nome, setNome, irPara, mudaTela } = props
    return (
        <>
            {mudaTela === 'homePage' ? 
                <HeaderStyle>
                    <TitleHeader onClick={() => irPara('homePage')}>Nome Empresa</TitleHeader>
                    <Busca
                        nome={nome}
                        setNome={setNome}
                    ></Busca>
                    <Icone onClick={() => irPara('carrinho')}> <FaShoppingCart /></Icone>
                </HeaderStyle> 
                : <HeaderStyle>
                    <TitleHeader onClick={() => irPara('homePage')}>Nome Empresa</TitleHeader>
                    <Icone onClick={() => irPara('homePage')}> <FaHome /></Icone>
                </HeaderStyle> 
            }
        </>
    )
}

export default Header