# Explorando APIs ChuckNorris e Bored: Um Projeto de Estudo em Node.js
Neste repositório, apresento um projeto dedicado ao aprimoramento das minhas habilidades em desenvolvimento com Node.js, focando especialmente na interação com APIs. O objetivo principal é adquirir uma maior familiaridade com a linguagem e suas capacidades de integração.
***
## O que o programa faz?
A ideia do programa é exibir para o usuário o retorno dos dados das APIs:
  - https://www.boredapi.com/
  - https://api.chucknorris.io/
***
## Rotas do projeto
  - `/` - retorna uma mensagem genérica de sucesso.
  - `/api/atividades` - retorna os dados da requisição à api https://www.boredapi.com/atividades
  - `/api/piadas` - retorna os dados da requisição à api https://api.chucknorris.io/jokes/random
***
## Como o programa está estruturado

```

├─ src/
│   ├─ controllers/
│   │   └── boredApiActivitesController.js
│   │   └── chuckNorrisJokesController.js
│   ├─ routes/
│   │   └── routes.js
│   ├─ utils/
│   │   ├─ constants/
│   │   │   └── appNumbers.js
│   │   │   └── appStrings.js
|   |   ├─ functions/
│   │   │  └── formatDate.js
│   │   │  └── guidGenerator.js
│   │   │  └── replaceChuckNorris.js
│   └── app.js
├─ .eslintrc.json
├─ .gitignore
├─ package-lock.json
├─ package.json
└── README.md

```
***
## Ferramentas necessárias:
`Node.js`
***
## Funcionamento do programa:
Os pacotes de dependências estão especificados dentro do arquivo `package.json`.
- Para conseguir rodar o programa é necessário baixar as dependências, rodando o seguinte comando no temrinal (dentro do diretório dos arquivos)

```
npm install
```

- Logo após, é necessário realizar o comando para iniciar o programa

```
npm run dev
```

- Depois do comando, o servidor local estará rodando a aplicação
- Basta abrir o seu navegador e digitar na barra de endereços: https://localhost:3000
- Para acessar a resposta da API de piadas do Chuck Norris: https://localhost:3000/api/piadas
- Para acessar a resposta da API de atividades, da Bored API: https://localhost:3000/api/atividades
***
