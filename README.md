# Requsição às APIs ChuckNorris (Jokes) e Bored (Activities)
Esse é um projeto de estudo, em Node.js, feito para melhorar minha familiaridade com APIs nessa linguagem.
***
## O que o programa faz?
A ideia do programa é exibir para o usuário o retorno dos dados das APIs:
  - https://www.boredapi.com/
  - https://api.chucknorris.io/
- O programa possui 3 rotas de funcionamento
  - `/` - retorna "x"
  - `/api/atividades` - retorna os dados da api https://www.boredapi.com/atividades
  - `/api/piadas` - retorna os dados da api https://api.chucknorris.io/jokes/random
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
│   │   └── formatDate.js
│   │   └── guidGenerator.js
│   │   └── replaceChuckNorris.js
│   └── app.js
├─ .eslintrc.json
├─ .gitignore
├─ package-lock.json
├─ package.json
└── README.md

```
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
