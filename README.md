<h2 align="center">
  <br>
  Projeto de Autenticação de usuários utilizando TDD
  <br>
</h2>

<p align="center">
  <a href="#intro">Intro</a> •
  <a href="#instruções">Instruções</a> •
  <a href="#bibliotecas">Ferramentas Utilizadas</a> •
  <a href="#comandos-interessantes">Comandos Interessantes</a> •
  <a href="#tutorial-jest">Configurando o Jest</a> •
</p>

## Intro

Trata-se de uma API Node.Js de autenticação que utiliza o Jest para realizar teste unitário e de integração.

## Instruções

É necessário a instalação do [Docker](https://www.docker.com/get-started).

A instalação do Docker é necessária pois iremos criar um container do Postgres:

![screenshot](https://i.ibb.co/k5sYNm4/dockerpg.png)

```bash
# Clone o repositório
$ git clone https://github.com/Coldiblaster/auth-tdd.git
# Entre na pasta
$ cd auth-tdd
# Instale as dependências
$ npm install
# Criaremos um container do Banco de dados (Postgres)
$ docker run -p 5432:5432 --ip 0.0.0.0 --name postgresBD -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=nodeauth -d postgres
# Para rodar os testes
$ npm test
```

![screenshot](http://g.recordit.co/6dsLtmWvAW.gif)

## Bibliotecas

No projeto é utilizado as seguintes bibliotecas para realizar os testes:

- [x] Jest (Framework de testes de JavaScript com foco na simplicidade, pode ser usado tanto no front-end quanto back-end)
- [x] Factory Girl (Iremos criar Factory (Ira criar em um lugar somente com os dados necessários para inserir nos testes)
- [x] Faker (Essa biblioteca serve para gerar dados aleatórios, como nome, email e senha para testes, de forma simples, rápida e prática)
- [x] Supertest (Para testar as routes nos TDD)
- [x] Sequelize (ORM baseado para Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server)
- [x] JWT (Gerador de tokens)
- [x] Bcrypt (Encriptador de senhas)


## Comandos-`INTERESSANTES`

```
# Criando Migrations no Sequelize
$ npx sequelize migration:create --name=create-nametable
# Rodar migrations
$ npx sequelize db:migrate

```

## Tutorial-Jest.

- [x] npm install --save-dev jest

Iremos utilizar uma biblioteca de testes chamada "Jest".

<ul>
  <li>Primeiramente iremos criar uma pasta chamada: __tests__ (O nome é opcional, foi deixado assim para a pasta ficar sempre no inicio)</li>
  <li>No scripts de inicialização iremos ignorar a pasta tests para que o nodemon não fique reiniciando o projeto toda vez que alterarmos algo dentro da pasta.No "package-lock.json" iremos configurar o script: "dev": "nodemon src/server.js --ignore __tests__"</li>
  <li>Agora iremos fazer algumas configurações no jest: npx jest --init (ira fazer algumas perguntas)</li>
  <ul>
    <li>Respostas que utilizei (pode ser diferente dependendo o que for fazer)</li>
    <li>√ Would you like to use Jest when running "test" script in "package.json"? ... yes</li>
    <li>√ Choose the test environment that will be used for testing » node</li>
    <li>√ Do you want Jest to add coverage reports? ... no</li>
    <li>√ Which provider should be used to instrument code for coverage? » v8</li>
    <li>√ Automatically clear mock calls and instances between every test? ... yes</li>
  </ul>
</ul>

Foi gerado um arquivo chamado jest.config.js, iremos fazer algumas modificaçoes nele:

```
# Descomentar e adicionar true.
$ Ele ira fazer o teste parar assim que houver a primeira falha e a partir dai podemos modificar o teste ou corrigir o código. Se ficasse comentado iria rodar todos os testes até o final.
# Configurar o testMatch (Ele define quais arquivos tenham testes).
$ "testMatch: ["**/__tests__/**/*.test.js?(x)"]" -- Desta forma ira pegar todos os arquivos que estejam dentro da pasta __tests__ que terminam com "test.js".
# Libera alguns detalhes interessantes no CMD, todos arquivos testados e no grafico na coluna Uncovered line mostra as linhas que não foram testadas:
$ collectCoverage: true
$ coverageDirectory: "__tests__/coverage"
$ collectCoverageFrom: ["src/**", "!src/database/migrations/**"]
```
Agora configurado o arquivo do jest.config, iremos criar algumas pastas dentro do __tests__

Iremos utilizar testes de intregração e unitarios.

-- Testes Unitarios: Testa as funções puras, dados as mesmas variaves não importa o número de vezes elas tem sempre o mesmo retorno, então essas funções puras são funções que geralmente nunca tocam em efeitos colaterais, por exemplo: chamada de api, cadastro nos bancos de dados, elas nunca tocam recursos que podem dar errado, são apenas recursos da própria linguagem como cálculos matemáticos ou geradores de caminhos.

-- Teste de integração: Testa as funcionalidades que podem realizar chamadas de api, cadastro de banco de dados e tudo mais ou seja, ele testa funções que não são puras, que tem efeitos colaterais.



