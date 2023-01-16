import ItemCard from "../ItemCard/ItemCard";
import { SectionLista, SectionTitle } from "./styles";

function ListaItens(props) {

    const { nome, minPreco, maxPreco, order, addCarrinho, Itens } = props
    return (
        <SectionLista>
            <SectionTitle>Livros Infantis</SectionTitle>
            {
                Itens

                    .filter((item) => {
                        return item.preco >= minPreco || minPreco === ''
                    })

                    .filter((item) => {
                        return item.preco <= maxPreco || maxPreco === ''
                    })

                    .filter((item) => {
                        const itemNome = item.nome.toLowerCase()
                        return itemNome.includes(nome.toLowerCase())
                    })

                    .sort((currentItem, nextItem) => {
                        if (order === "cre") {
                            return currentItem.preco -nextItem.preco
                        } else if (order === "dec") {
                            return nextItem.preco - currentItem.preco 
                        }
                    })

                    .map((item) => {
                        return (
                            <ItemCard
                                key={item.id}
                                item={item}
                                addCarrinho={addCarrinho}
                            ></ItemCard>)
                    })

            }
    </SectionLista>
)
}

export default ListaItens;


