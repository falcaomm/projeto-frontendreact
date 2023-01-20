import React from "react";
import Busca from "../Busca/Busca"
import { HeaderStyle, TitleHeader, Icone, HeaderStyleCarrinho } from "./styles";
import { FaShoppingCart, FaHome } from 'react-icons/fa'


function Header(props) {
    const { nome, setNome, irPara, mudaTela } = props
    const quantidadeItens = props.carrinho.reduce((x, item) => x + item.quantidade, 0)

    return (
        <>
            {mudaTela === 'homePage' ? 
                <HeaderStyle>
                    <TitleHeader onClick={() => irPara('homePage')}>Biblioteca Espacial</TitleHeader>
                    <Busca
                        nome={nome}
                        setNome={setNome}
                    ></Busca>
                    <Icone onClick={() => irPara('carrinho')}> 
                        {quantidadeItens == 0
                            ? <FaShoppingCart />
                            : <>
                                <FaShoppingCart />
                                <p>{quantidadeItens}</p>
                            </>
                         }
                    </Icone>
                </HeaderStyle> 
                : <HeaderStyleCarrinho>
                    <TitleHeader onClick={() => irPara('homePage')}>Biblioteca Espacial</TitleHeader>
                    <Icone onClick={() => irPara('homePage')}> <FaHome /></Icone>
                </HeaderStyleCarrinho> 
            }
        </>
    )
}

export default Header