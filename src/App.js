import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Assunto from './componentes/Assunto';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [assuntos, setAssuntos] = useState([
      {
        id: uuidv4(),
        nome: 'Filme',
        cor: '#0ea800'
      },
      {
        id: uuidv4(),
        nome: 'Série',
        cor: '#0057a8'
      },
      {
        id: uuidv4(),
        nome: 'Música',
        cor: '#a80000'
      },
      {
        id: uuidv4(),
        nome: 'Livro',
        cor: '#7800a8'
      },
      {
        id: uuidv4(),
        nome: 'Jogo',
        cor: '#a89700'
      },
      {
        id: uuidv4(),
        nome: 'Site',
        cor: '#a80084'
      }
    ])

  const [cards, setCards] = useState([])

  const aoNovoCardAdicionado = (card) => {
    setCards([...cards, { ...card, id: uuidv4() }])
  }

  function deletarCard(id) {
    setCards(cards.filter(card => card.id !== id))
  }

  function mudarCorDoAssunto(cor, id) {
     setAssuntos(assuntos.map(assunto => {
      if(assunto.id === id) {
        assunto.cor = cor
      }
      return assunto
     }))
  }

  function cadastrarAssunto(novoAssunto) {
    setAssuntos([...assuntos, {...novoAssunto, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarAssunto={cadastrarAssunto}
        assuntos={assuntos.map(assunto => assunto.nome)} 
        aoCardCadastrado={card => aoNovoCardAdicionado(card)} 
      />
      
      {assuntos.map((assunto, index) => <Assunto 
        mudarCor={mudarCorDoAssunto}
        key={index} 
        nome={assunto.nome} 
        id={assunto.id}
        cor={assunto.cor} 
        cards={cards.filter(card => card.assunto === assunto.nome)}
        aoDeletar={deletarCard}
      />)}

      <Rodape />
      
    </div>
  );
}

export default App;
