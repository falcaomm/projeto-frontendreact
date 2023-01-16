import React, { useState } from "react";
import { AsideStyle, InputStyle, Titles, Label, DivStyle, SelectStyle, ButtonCar, Text } from "./styles";

function Filtros(props) {

    const precoTotal = props.carrinho.reduce((x, item) => x + item.preco * item.quantidade, 0)
    const quantidadeItens = props.carrinho.reduce((x, item) => x + item.quantidade, 0)
    const [select, setSelect] = useState('')


    const onChangeOrder = (e) => {
        props.setOrder(e.target.value)
        setSelect(e.target.value)
    }

    const onChangeMaxPreco = (e) => {
        props.setMaxPreco(e.target.value)
    }

    const onChangeMinPreco = (e) => {
        props.setMinPreco(e.target.value)
    }

    const limparFiltros = () => {
        props.setOrder("nada")
        props.setMaxPreco(Infinity)
        props.setMinPreco(-Infinity)
        setSelect('nada')
    }

    return (
        <AsideStyle>
            
            <DivStyle>
            <Titles>Ordenar por</Titles>
                <SelectStyle onChange={(e) => onChangeOrder(e)} value={select}>
                    <option value="nada"></option>
                    <option value="cre">Menor Preço</option>
                    <option value="dec">Maior Preço</option>
                </SelectStyle>
            </DivStyle>

            <DivStyle>
            <Titles>Preço</Titles>
            <Label for="min">Min</Label>
            <InputStyle
                id="min"
                type="number"
                value={props.minPreco}
                onChange={(e) => onChangeMinPreco(e)}
            />
            <Label for="max">- Max</Label>
            <InputStyle
                id="max"
                type="number"
                value={props.maxPreco}
                onChange={(e) => onChangeMaxPreco(e)}
                />
            </DivStyle>

            <DivStyle>
                <Titles>Carrinho</Titles>
                {quantidadeItens === 1 ? <Text> {quantidadeItens} Item</Text> : <Text> {quantidadeItens} Itens</Text>}
                <ButtonCar onClick={() => props.irPara('carrinho')}>Total: R$ {precoTotal} {'>'} </ButtonCar>
            </DivStyle>
            
            <DivStyle>
                <ButtonCar onClick={limparFiltros}>limpar Filtros </ButtonCar>
            </DivStyle>
        </AsideStyle>
    );
}

export default Filtros;