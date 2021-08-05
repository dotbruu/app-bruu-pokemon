# bruu-pokemon

<p align="center">
  <img src="https://uploaddeimagens.com.br/images/003/367/422/full/Grupo_59.png?1628118904" />
</p>

### Sobre
O desafio deste projeto foi pegar uma planilha excel subir os dados no servidor NodeJS e converter para json, salvar no banco de dados mongoDB e listar no frontend com ReactJS, a listagem dos pokemons utiliza scroll infinito.

### Backend

#### Tecnologias

- Typescript
- Express
- Multer
- Convert-excel-to-json
- Mongoose
- MongoDB

#### Como instalar?

Instale o banco de dados usando o docker.

```
  docker-compose up
```

Instale as dependências

```
  yarn install
  // ou
  npm install
```

#### Como Utilizar?

A api contem três rotas, 01 para upload do arquivo excel, 01 para listagem de todos os pokemons e 01 para pesquisar algum pokemon.

##### Upload do Arquivo

Use a rota com método POST para subir o arquivo .xlsx atráves do método multipart form.

```
  POST/ http://localhost:3333
```

##### Listagem de todos os pokemons

Utilize a rota com método GET para listar todos os pokemons, adicione parâmetros como limit e skip.

```
  GET / http://localhost:3333/search?limit=10&skip=0
```

##### Pesquisar pokemon

Utilize a rota com método GET /search para pesquisar por algum pokemon, adicione o parâmetro term.

```
  GET / http://localhost:3333/search?limit=10&skip=0&term=venusaur
```

### Frontend

#### Tecnologias

- Typescript
- ReactJS
- Axios
- Styled Components
- Reacttrap

#### Como Utilizar?

Instale as dependências

```
  yarn install
  // ou
  npm install
```

Rode a aplicação

```
  yarn start
```
