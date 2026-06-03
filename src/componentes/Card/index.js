import './Card.css'

const Card = ({nome, descricao, imagem, corPrimaria}) => {
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Card