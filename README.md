# TOPIQ

TOPIQ é um projeto em React que ajuda a organizar assuntos favoritos em cards por categoria. A ideia é praticar React de forma funcional, com foco em componentes reutilizáveis, estado e renderização dinâmica.

## 🚀 O que o projeto faz

- Permite cadastrar um novo item com:
  - categoria (assunto)
  - nome
  - descrição ou autor
  - imagem
- Exibe os itens automaticamente em cards dentro da categoria correta
- Mantém a interface limpa e visual

## 🎯 Objetivo do projeto

O projeto foi criado para treinar conceitos fundamentais do desenvolvimento Front-end com React:

- Componentização
- Estado com `useState`
- Eventos e formulários
- Passagem de dados via `props`
- Renderização condicional
- Renderização de listas
- Organização de componentes e estrutura de projeto

## 🧩 Estrutura do projeto

- `src/App.js` — lógica principal e gerenciamento de estado
- `src/componentes/Formulario` — formulário de cadastro
- `src/componentes/Assunto` — exibição de grupos de cards por categoria
- `src/componentes/Card` — card individual do item
- `src/componentes/ListaSuspensa` — seleção de assunto/categoria
- `src/componentes/CampoTexto` — campos de entrada de texto
- `src/componentes/Rodape` — rodapé da aplicação

## ⚙️ Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
3. Abra o navegador em:
   ```
   http://localhost:3000
   ```

## 💡 Nota

Atualmente a imagem é informada como URL no formulário. Para suportar upload direto do arquivo local, é possível adicionar um input `type="file"` e usar uma URL de dados (`data URL`) para exibir a imagem.