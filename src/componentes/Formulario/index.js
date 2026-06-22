import { useState, useRef } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    
    const imagemInput = useRef(null)

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [assunto, setAssunto] = useState('')
    const [nomeAssunto, setNomeAssunto] = useState('')
    const [corAssunto, setCorAssunto] = useState('')

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
                <Campo obrigatorio={true} label='Nome' placeholder='Digite o nome' valor={nome} aoAlterado={valor => setNome(valor)} />
                <Campo obrigatorio={true} label='Descrição ou Autor' placeholder='Digite uma descrição ou autor' valor={descricao} aoAlterado={valor => setDescricao(valor)} />
                <div className='campo'>
                    <label>Imagem</label>
                    <input type='file' accept='image/*' ref={imagemInput} onChange={aoSelecionarImagem} />
                </div>
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarAssunto({ nome: nomeAssunto, cor: corAssunto})
                setNomeAssunto('')
                setCorAssunto('')
                alert('Novo assunto adicionado na lista de assuntos!')
            }}>
                <h2>Preencha os dados para criar um novo assunto</h2>
                <Campo obrigatorio label='Nome' placeholder='Digite o nome do assunto' valor={nomeAssunto} aoAlterado={valor => setNomeAssunto(valor)} />
                <Campo obrigatorio type='color' label='Cor' placeholder='Digite a cor do assunto' valor={corAssunto} aoAlterado={valor => setCorAssunto(valor)} />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario