import ListaItens from "./components/ListaItens/ListaItens";
import Filtros from "./components/Filtros/Filtros";
import Carrinho from "./components/Carrinho/Carinho";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import itens from './data/itens.json'
import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {

  const Itens = itens
  const [nome, setNome] = useState("")
  const [order, setOrder] = useState("")
  const [minPreco, setMinPreco] = useState(-Infinity)
  const [maxPreco, setMaxPreco] = useState(Infinity)
  const [carrinho, setCarrinho] = useState([])
  const [mudaTela, setMudaTela] = useState('homePage')

  const irPara = (e) => {
    setMudaTela(e)
  }

  const addCarrinho = (click) => {
    const procuraItem = carrinho.find((item) => item.id === click.id)

    if (procuraItem) {
      const novoCarrinho = carrinho.map((item) => {
        return (
          item.id === click.id ?
            { ...procuraItem, quantidade: procuraItem.quantidade + 1 }
            : item)
      })
      setCarrinho(novoCarrinho)
      localStorage.setItem('itensCarrinho', JSON.stringify(novoCarrinho))
    } else {
      const novoCarrinho = [...carrinho, { ...click, quantidade: 1 }]
      setCarrinho(novoCarrinho)
      localStorage.setItem('itensCarrinho', JSON.stringify(novoCarrinho) )
    }
  }


  const removeCarrinho = (click) => {
    const procuraItem = carrinho.find((item) => item.id === click.id)

    if (procuraItem.quantidade === 1) {
      const novoCarrinho = carrinho.filter((item) => item.id !== click.id)
      setCarrinho(novoCarrinho)
      localStorage.setItem('itensCarrinho', JSON.stringify(novoCarrinho))
    } else {
      const novoCarrinho = carrinho.map((item) => {
        return (
          item.id === click.id ?
            { ...procuraItem, quantidade: procuraItem.quantidade - 1 }
            : item)
      })
      setCarrinho(novoCarrinho)
      localStorage.setItem('itensCarrinho', JSON.stringify(novoCarrinho))
      }
  }

  useEffect(() => {
    setCarrinho(
      localStorage.getItem('itensCarrinho') ?
        JSON.parse(localStorage.getItem('itensCarrinho'))
        : []
    )
  }, [])

  return (
    <body>
      <GlobalStyle />
      <Header
        nome={nome}
        setNome={setNome}
        irPara={irPara}
        mudaTela={mudaTela}
      ></Header>
      <main>
        {mudaTela === 'homePage' ? <>
          <Filtros
            minPreco={minPreco}
            setMinPreco={setMinPreco}
            maxPreco={maxPreco}
            setMaxPreco={setMaxPreco}
            setOrder={setOrder}
            carrinho={carrinho}
            irPara={irPara}
          ></Filtros>
          <ListaItens
            Itens={Itens}
            nome={nome}
            minPreco={minPreco}
            maxPreco={maxPreco}
            order={order}
            addCarrinho={addCarrinho}
          ></ListaItens>
        </> :
          <Carrinho
            carrinho={carrinho}
            addCarrinho={addCarrinho}
            removeCarrinho={removeCarrinho}
            setCarrinho={setCarrinho}
            irPara={irPara}
          ></Carrinho>}
      </main>
      <Footer>
      </Footer>
    </body>
  );

}

export default App;
