import React, { useState } from "react";
import {MainStyle} from './styles'

function Carrinho(props) {
    const { carrinho, addCarrinho, removeCarrinho, setCarrinho } = props
    const precoTotal = carrinho.reduce((x, item) => x + item.preco * item.quantidade, 0)

    const deleteItem = (click) => {
        const novoCarrinho = carrinho.filter((item) => item.id !== click.id)
        setCarrinho(novoCarrinho)
        localStorage.setItem('itensCarrinho', JSON.stringify(novoCarrinho))
    }

    const esvaziarCarrinho = () => {
        setCarrinho([])
        localStorage.setItem('itensCarrinho', JSON.stringify([]))
    }

    const finalizarCompra = () => {
        setCarrinho([])
        localStorage.setItem('itensCarrinho', JSON.stringify([]))
        props.irPara('homePage')
        alert("Compra Finalizada Obrigada!")
    }

    return (
        <MainStyle>
            <h2>Carrinho</h2>
            {carrinho.length === 0 ? <p>Carrinho está vazio</p> :
                <div>
                    <p>Valor unit.</p>
                    <p>Qtd.</p>
                    <p>Valor total</p>
                </div>}
                
            <section>
                {carrinho.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.img} />
                            <p>{item.nome}</p>
                            <p>{item.preco}</p>
                            <button onClick={() => removeCarrinho(item)}>
                                -
                            </button>
                            <p>{item.quantidade}</p>
                            <button onClick={() => addCarrinho(item)}>
                                +
                            </button>
                            <p> R${item.preco * item.quantidade}</p>
                            <button onClick={() => deleteItem(item)}>x</button>
                        </div>
                    )
                })}
            </section>
            
            {carrinho.length !== 0 ?
                <div>
                    <button onClick={esvaziarCarrinho}>Esvaziar carrinho</button>
                    <h3>Preco total = {precoTotal}</h3>

                    <div>
                        <button onClick={finalizarCompra}>Finalizar compra</button>
                        <button onClick={() => props.irPara('homePage')}>Continuar comprando</button>
                    </div>
                </div>
                : <button onClick={() => props.irPara('homePage')}>Continuar Comprando</button>}
        </MainStyle>
    );
}

export default Carrinho;