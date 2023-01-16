import React from "react";
import { ButtonAdd, CardItem, DescriptionItem, Img, InfoItem, NameItem, PriceItem, DivButton } from "./styles";
function ItemCard(props) {
    const { item, addCarrinho } = props
    
    return (
        <div>
            <CardItem>
            <InfoItem>
            <NameItem>{item.nome}</NameItem>
            <DescriptionItem>{item.desc}</DescriptionItem>
                    <PriceItem>R${item.preco.toFixed(2).replace(".", ",")}</PriceItem>
            </InfoItem>
            <Img src={item.img} alt={item.alt} />
            </CardItem>
            <DivButton>
                <ButtonAdd onClick={() => addCarrinho(item)}><p>+</p></ButtonAdd>
            </DivButton>
        </div>
    );
}

export default ItemCard;