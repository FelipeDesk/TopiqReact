import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Assunto from './componentes/Assunto';
import Rodape from './componentes/Rodape';

function App() {

  const assuntos = [
      {
        nome: 'Filme',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9'
      },
      {
        nome: 'Série',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF'
      },
      {
        nome: 'Música',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2'
      },
      {
        nome: 'Livro',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
      },
      {
        nome: 'Jogo',
        corPrimaria: '#DB6EBF',
        corSecundaria: '#FAE9F5'
      },
      {
        nome: 'Site',
        corPrimaria: '#FFBA05',
        corSecundaria: '#FFF5D9'
      },
      {
        nome: 'Outro',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF'
      }
    ]

  const [cards, setCards] = useState([])

  const aoNovoCardAdicionado = (card) => {
    console.log(card)
    setCards([...cards, card])
  }

  function deletarCard() {
    console.log('Deletando card')
  }

  return (
    <div className="App">
      <Banner />
      <Formulario assuntos={assuntos.map(assunto => assunto.nome)} aoCardCadastrado={card => aoNovoCardAdicionado(card)} />
      
      {assuntos.map((assunto, index) => <Assunto 
        key={index} 
        nome={assunto.nome} 
        corPrimaria={assunto.corPrimaria} 
        corSecundaria={assunto.corSecundaria} 
        cards={cards.filter(card => card.assunto === assunto.nome)}
        aoDeletar={deletarCard}
      />)}

      <Rodape />
      
    </div>
  );
}

export default App;
