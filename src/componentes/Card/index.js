import { IoCloseCircle } from "react-icons/io5"
import './Card.css'

const Card = ({nome, descricao, imagem, id, corPrimaria, aoDeletar}) => {
    return (
        <div className='card'>
            <IoCloseCircle 
                size={30} 
                className='deletar' 
                onClick={() => aoDeletar(id)} 
            />
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