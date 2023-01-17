import { MainStyle, Title, SectionCartVazio, Icons, Text, ButtonVoltar, SectionCart, Infos, Img, PriceItem, NameItem, DivQtd, DeleteButton, DivStyle, ButtonQtd, QtdItem, DivImgName, SectionFinale, TitleFinale, ButtonContinuar, ButtonEsvaziar, ButtonFinalizar } from './styles'
import { FaShoppingCart } from 'react-icons/fa'

function Carrinho(props) {
    const { carrinho, addCarrinho, removeCarrinho, setCarrinho } = props
    const precoTotal = carrinho.reduce((x, item) => x + item.preco * item.quantidade, 0).toFixed(2).replace(".", ",")

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
            <Title>Carrinho</Title>
            {carrinho.length === 0 ?
                <SectionCartVazio>
                    <Icons>
                        <FaShoppingCart />
                    </Icons>
                    <Text>Seu carrinho está vazio</Text>
                    <ButtonVoltar onClick={() => props.irPara('homePage')}>Voltar</ButtonVoltar>
                </SectionCartVazio> :
                <>
                    <Infos>
                        <DivImgName>Seus Itens</DivImgName>
                        <PriceItem>Valor unit.</PriceItem>
                        <DivQtd>Qtd.</DivQtd>
                        <PriceItem>Valor total</PriceItem>
                    </Infos>

                        {carrinho.map((item) => {
                            return (
                                <DivStyle>
                                    
                                    <SectionCart key={item.id}>
                                        <DivImgName>
                                            <Img src={item.img} />
                                            <NameItem>{item.nome}</NameItem>
                                        </DivImgName>
                                        <PriceItem>R${item.preco.toFixed(2).replace(".", ",")}</PriceItem>
                                        <DivQtd>
                                            <ButtonQtd onClick={() => removeCarrinho(item)}>
                                                -
                                            </ButtonQtd>
                                            <QtdItem>{item.quantidade}</QtdItem>
                                                <ButtonQtd onClick={() => addCarrinho(item)}>
                                                +
                                            </ButtonQtd>
                                        </DivQtd>
                                        <PriceItem> R${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</PriceItem>
                                    </SectionCart>
                                    
                                    <DeleteButton onClick={() => deleteItem(item)}>x</DeleteButton>

                                </DivStyle>
                            )
                        })}
                </>
                }
            
            {carrinho.length !== 0 &&
                <SectionFinale>
                    <ButtonEsvaziar onClick={esvaziarCarrinho}>Esvaziar carrinho</ButtonEsvaziar>
                    <TitleFinale>Valor total = {precoTotal}</TitleFinale>                
                    <ButtonFinalizar onClick={finalizarCompra}>Finalizar compra</ButtonFinalizar>
                    <ButtonContinuar onClick={() => props.irPara('homePage')}>Continuar comprando</ButtonContinuar>
                </SectionFinale>}
        </MainStyle>
    );
}

export default Carrinho;