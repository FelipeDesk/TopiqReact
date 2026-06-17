import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Assunto from './componentes/Assunto';
import Rodape from './componentes/Rodape';

function App() {

  const [assuntos, setAssuntos] = useState([
      {
        nome: 'Filme',
        cor: '#D9F7E9'
      },
      {
        nome: 'Série',
        cor: '#E8F8FF'
      },
      {
        nome: 'Música',
        cor: '#F0F8E2'
      },
      {
        nome: 'Livro',
        cor: '#FDE7E8'
      },
      {
        nome: 'Jogo',
        cor: '#FAE9F5'
      },
      {
        nome: 'Site',
        cor: '#FFF5D9'
      },
      {
        nome: 'Outro',
        cor: '#FFEEDF'
      }
    ])

  const [cards, setCards] = useState([])

  const aoNovoCardAdicionado = (card) => {
    console.log(card)
    setCards([...cards, card])
  }

  function deletarCard() {
    console.log('Deletando card')
  }

  function mudarCorDoAssunto(cor, nome) {
     setAssuntos(assuntos.map(assunto => {
      if(assunto.nome === nome) {
        assunto.cor = cor
      }
      return assunto
     }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario assuntos={assuntos.map(assunto => assunto.nome)} aoCardCadastrado={card => aoNovoCardAdicionado(card)} />
      
      {assuntos.map((assunto, index) => <Assunto 
        mudarCor={mudarCorDoAssunto}
        key={index} 
        nome={assunto.nome} 
        corPrimaria={assunto.corPrimaria} 
        cor={assunto.cor} 
        cards={cards.filter(card => card.assunto === assunto.nome)}
        aoDeletar={deletarCard}
      />)}

      <Rodape />
      
    </div>
  );
}

export default App;
