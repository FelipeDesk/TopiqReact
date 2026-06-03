import { useState, useRef } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    const imagemInput = useRef(null)

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [assunto, setAssunto] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCardCadastrado({
            nome,
            descricao,
            imagem,
            assunto
        })
        setNome('')
        setDescricao('')
        setAssunto('')
        if (imagemInput.current) {
            imagemInput.current.value = ''
        }
    }

    const aoSelecionarImagem = (evento) => {
        const arquivo = evento.target.files[0]

        if (!arquivo) {
            setImagem('')
            return
        }

        const leitor = new FileReader()
        leitor.onloadend = () => {
            setImagem(leitor.result)
        }
        leitor.readAsDataURL(arquivo)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do seu melhor assunto</h2>
                <ListaSuspensa obrigatorio={true} label='Assunto' itens={props.assuntos} valor={assunto} aoAlterado={valor => setAssunto(valor)} />
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label='Descrição ou Autor' placeholder='Digite uma descrição ou autor' valor={descricao} aoAlterado={valor => setDescricao(valor)} />
                <div className='campo-texto'>
                    <label>Imagem</label>
                    <input type='file' accept='image/*' ref={imagemInput} onChange={aoSelecionarImagem} />
                </div>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario