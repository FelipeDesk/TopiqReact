import Card from '../Card'
import './Assunto.css'
import hexToRgba from 'hex-to-rgba';

const Assunto = (props) => {
    return (
        (props.cards.length > 0) && <section className='assunto' style={{ backgroundColor: hexToRgba(props.cor, '0.5') }}>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nome)} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='cards'>
                {props.cards.map((card, index) => {
                    return <Card key={index} nome={card.nome} descricao={card.descricao} imagem={card.imagem} corDeFundo={props.cor} aoDeletar={props.aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Assunto