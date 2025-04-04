# 🕹️ Jogo da Velha em React

Este projeto é uma implementação do clássico **Jogo da Velha (Tic-Tac-Toe)** utilizando **React.js**. O jogo permite que dois jogadores alternem entre "X" e "O" em um tabuleiro 3x3, e detecta automaticamente o vencedor ou empate.

---

## 📌 Funcionalidades

✅ Alternância entre os jogadores "X" e "O" ✅ Verificação automática de vitória ou empate ✅ Bloqueio de jogadas em células já preenchidas ✅ Interface minimalista e responsiva ✅ Código modular e reutilizável

---

## 🚀 Como rodar o projeto

### 1️⃣ **Pré-requisitos**

Antes de começar, você precisa ter o **Node.js** e o **npm** instalados na sua máquina.

- Verifique a versão do Node.js:
  ```sh
  node -v
  ```
- Verifique a versão do npm:
  ```sh
  npm -v
  ```
- Se necessário, instale ou atualize o Node.js: [Baixar Node.js](https://nodejs.org/)

### 2️⃣ **Clonar o repositório**

Abra o terminal e execute:

```sh
git clone https://github.com/seu-usuario/jogo-da-velha-react.git
cd jogo-da-velha-react
```

### 3️⃣ **Instalar as dependências**

```sh
npm install
```

### 4️⃣ **Rodar o projeto**

```sh
npm run dev
```

O jogo estará disponível em `http://localhost:5173/` ou outra porta indicada no terminal.

---

## 📁 Estrutura do projeto

```
📂 jogo-da-velha-react
├── 📁 src
│   ├── 📄 App.jsx          # Componente principal
│   ├── 📄 Board.jsx        # Componente do tabuleiro
│   ├── 📄 Square.jsx       # Componente de cada célula do jogo
│   ├── 📄 index.css        # Estilos globais
│   ├── 📄 Board.css        # Estilos do tabuleiro
│   └── 📄 utils.js         # Funções auxiliares (ex: cálculo do vencedor)
├── 📄 index.html           # Arquivo HTML principal
├── 📄 package.json         # Configuração do projeto e dependências
└── 📄 README.md            # Documentação do projeto
```

---

## 🛠️ Tecnologias utilizadas

- **React.js** - Biblioteca para criação da interface
- **Vite.js** - Ferramenta para desenvolvimento rápido
- **CSS** - Estilização do tabuleiro e componentes

---

## ✨ Como jogar

1️⃣ O jogo começa com o jogador **"X"**. 2️⃣ Clique em um quadrado vazio para fazer sua jogada. 3️⃣ O próximo jogador será **"O"**. 4️⃣ O jogo continua até alguém alinhar três símbolos em linha, coluna ou diagonal. 5️⃣ Se todas as casas forem preenchidas e ninguém ganhar, o jogo termina em **empate**.

---

## 📌 Como contribuir

Se quiser melhorar este projeto, siga estes passos:

1. **Faça um fork** do repositório.
2. **Crie uma branch** com sua feature ou correção:
   ```sh
   git checkout -b minha-feature
   ```
3. **Commit suas mudanças**:
   ```sh
   git commit -m "Adicionei nova funcionalidade X"
   ```
4. **Envie para o repositório**:
   ```sh
   git push origin minha-feature
   ```
5. **Abra um Pull Request** no GitHub.

---

## 📜 Licença

Este projeto é de código aberto e pode ser utilizado livremente.

---

🚀 **Divirta-se jogando e codando!** 😃

