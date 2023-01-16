import React from "react";
import { InputStyle } from "./styles";

function Busca(props) {

    const onChangeNome = (e) => {
        props.setNome(e.target.value)
    }
    return (
        <>
            <InputStyle
                type="text"
                placeholder="Buscar por nome"
                value={props.nome}
                onChange={(e) => onChangeNome(e)}
            />
        </>
    )
}

export default Busca