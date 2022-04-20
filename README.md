<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
"# ioasys" 

## Postgres

- **User:** postgres

**Tabelas de Estados**

```bash
-----+---------------------
| id |        name        |
-----+---------------------
|  1 | Acre               |
|  2 | Alagoas            |
|  3 | Amapá              |
|  4 | Amazonas           |
|  5 | Bahia              |
|  6 | Ceará              |
|  7 | Espírito Santo     |
|  8 | Goiás              |
|  9 | Maranhão           |
| 10 | Mato Grosso        |
| 11 | Mato Grosso do Sul |
| 12 | Minas Gerais       |
| 13 | Pará               |
| 14 | Paraná             |
| 15 | Paraíba            |
| 16 | Pernambuco         |
| 17 | Piauí              |
| 18 | Rio de Janeiro     |
| 19 | Rio Grande do Norte|
| 20 | Rio Grande do Sul  |
| 21 | Rondônia           |
| 22 | Roraima            |
| 23 | Santa Catarina     |
| 24 | São Paulo          |
| 25 | Sergipe            |
| 26 | Tocantins          |
| 27 | Distrito Federal   |
-----+---------------------
```
**Tabela de Tipos**

```bash
-----+---------------------
| id |       name         |
-----+---------------------
|  1 | User               |
|  2 | Sponsor            |
-----+---------------------
```

## API Heroku

- Link: https://transmeet.herokuapp.com

**EndPoints**
- **Cadastro de Usuários - Pessoas trans (POST):** https://transmeet.herokuapp.com/users
- **Cadastro de Patrocinadores (POST):** https://transmeet.herokuapp.com/sponsors
- **Retorno dos Usuários - Pessoas trans (GET):** https://transmeet.herokuapp.com/users
- **Retorno dos Patrocinadores (GET):** https://transmeet.herokuapp.com/sponsors
- **Login(POST):** https://transmeet.herokuapp.com/login

## Retorno da Requisições

**Cadastro**

Exemplo de entrada:

User:
```bash
{
    "name": "Carla Silva",
    "email": "carla@gmail.com",
    "password": "Amarelo34",
    "regNumber": "12345678",
    "birthDate": "03/03/1996",
    "address": "Rua 1, Bairo 2",
    "gender": "Feminino",
    "description": "Teste",
    "telephone": "01140028922",
    "city": "São Paulo",
    "stateId": 24, ##ID do estado de São Paulo (Consulte a tabela apresentada acima)
    "typeId": 1 ##ID do tipo "User" na tabela types (Consulte a tabela apresentada acima)
}
```

Retorno do cadastro:

```bash
{
    "name": "Carla Silva",
    "email": "carla@gmail.com",
    "password": undefined,
    "regNumber": "12345678",
    "birthDate": "03/03/1996",
    "address": "Rua 1, Bairo 2",
    "gender": "Feminino",
    "description": "Teste",
    "telephone": "01140028922",
    "city": "São Paulo",
    "stateId": 24,
    "typeId": 1 
}
```

Sponsor:
```bash
{
    "name": "Limeira Pisos",
    "email": "contato@limeira.com",
    "password": "Fortune26",
    "regNumber": "12345678/0001",
    "address": "Rua 5, Bairo 8",
    "description": "Teste",
    "telephone": "01140028922",
    "city": "São Paulo",
    "site": "limeirapisos.com.br",
    "stateId": 24, ##ID do estado de São Paulo (Consulte a tabela apresentada acima)
    "typeId": 2 ##ID do tipo "Sponsor" na tabela types (Consulte a tabela apresentada acima)
}
```

Retorno do Cadastro:

```bash
{
    "name": "Limeira Pisos",
    "email": "contato@limeira.com",
    "password": undefined,
    "regNumber": "12345678/0001",
    "address": "Rua 5, Bairo 8",
    "description": "Teste",
    "telephone": "01140028922",
    "city": "São Paulo",
    "site": "limeirapisos.com.br",
    "stateId": 24, ##ID do estado de São Paulo
    "typeId": 2 ##ID do tipo "Sponsor" na tabela types
}
```

**Login**

Entrada:

```bash
{
    "email": "carla@gmail.com",
    "password": "Amarelo34"
}
```

Se os dados baterem, será retornado um access token, que será utilizado para as autenticações nas outras rotas.

**Busca de Usuários**

Os endpoints são os mesmos de busca (/users ou /sponsors). Porém, para aplicar o termo a ser pesquisado, deve-se adicionar no fim da url o termo a ser pesquisado. 

*Exemplo:* https://transmeet.herokuapp.com/users/car || Essa url retorna todos os Usuários que possuam "car" em seu nome. A busca é case-insensitive, ou seja, ignora a diferença entre letras maiúsculas e minúsculas.


## Matches e Requisições

**Cadastro de Pedido de Auxílio**

- Endpoint (POST): https://transmeet.herokuapp.com/match
- Corpo da requisição:
```bash
{
  "idUser": ##id do usuário requisitante
  "idSponsor": ##id do patrocinador 
}
```
**Busca de solicitações

Nesse endpoint a API retorna todas solicitações para determinada conta, tendo a necessidade de enviar o id da conta na URL.

- Endpoint (GET): https://transmeet.herokuapp.com/match/sponsors/:id //Específica para Patrocinadores
                  https://transmeet.herokuapp.com/match/users/:id    //Específica para Usuários
- O retorno será o conteudo daquela requisição.

No endpoint abaixo, será retornada os dados do pedido de patrocinio.

- Endpoint (GET): https://transmeet.herokuapp.com/match/:id
- O retorno é o dado da requisição e os dados das contas atribuidas.


**Confirmação ou rejeição do patrocinio

Aqui o patrocinador irá dizer se o pedido será aceito para uma futura negociação entre as partes ou se será rejeitada.

- Endpoint (PATCH): https://transmeet.herokuapp.com/match/:id //Id da solicitação
- Se a requisição foi aceita ou não deverá ser enviada pelo corpo:
```bash
{
  "response": ## 'true' ou 'false'
}
```

