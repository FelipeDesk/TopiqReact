import { IoCloseCircle } from "react-icons/io5"
import './Card.css'

const Card = ({nome, descricao, imagem, corDeFundo, aoDeletar}) => {
    return (
        <div className='card'>
            <IoCloseCircle size={30} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
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