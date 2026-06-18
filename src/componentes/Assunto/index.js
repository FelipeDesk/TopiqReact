import Card from '../Card'
import './Assunto.css'

const Assunto = (props) => {
    return (
        (props.cards.length > 0) && <section className='assunto' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='cards'>
                {props.cards.map((card, index) => {
                    return <Card key={index} nome={card.nome} descricao={card.descricao} imagem={card.imagem} id={card.id} corPrimaria={props.corPrimaria} aoDeletar={props.aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Assunto