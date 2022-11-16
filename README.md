<h1 align="center">
  <img width="200px" src="https://uploaddeimagens.com.br/images/004/054/563/original/julianandrade.png?1665240664"/>
  <br>
  <img width="300px" src="https://github.com/Julian-Andrade/nlw_copa_ignite/blob/main/web/src/assets/logo.svg" />
  <p>Copa do Mundo - Next Level Week</p>
</h1>

***:clipboard: Sobre o Projeto \ About this project***

Exercício do NLW – Copa do Mundo, trilha Ignite, evento realizado especialmente para a copa do mundo pelo pessoal da Rocketseat onde foi elaborado um projeto completo (rede, servidor e aplicativo móvel). O projeto consiste em uma plataforma para conectar usuários, onde estes, podem se divertir criando ou participando de bolões já existentes para os jogos da Copa do Mundo. Na aplicação é possível criar um bolão, compartilhar, acompanhar e participar de algum já criado. A aplicação conta com auxílio de um banco de dados onde as informações são registradas e buscadas via programa de aplicação a interface (API).

*Exercise from NLW – World Cup, trail Ignite, event realized especially for world cup from Rocketseat where it was elaborated a complete project (web, server and mobile app). The project consists in a platform to connect users, where they have fun to creating or participating in existing pools for the games at World Cup. In this application it’s possible create a pool, share, accompany and to participate if have any created. The application register information with database and fetched with API.*

***:file_folder: Como iniciar a aplicação \ How to start the application***

Configurações Iniciais \ Initial Configuration

```sh
# Clone o repositório \ Clone this repository 
$ git clone https://github.com/Julian-Andrade/nlw_copa_ignite

# Acesse o terminal do projeto \ Access the project terminal
$ cd "nome da pasta" \ cd "folder name"

# Instale todas as dependências \ Install all dependencies
$ npm install

# Inicie o servidor dentro do terminal "server" \ Start the server inside the terminal "server"
$ npm run dev

# Observações \ Observations

# 1 . Na pasta server\server.ts, linha 37, para que a versão web funcione é necessário comentar a parte "host: "0.0.0.0"" 
# 1.  In folder server\server.ts, line 37, the web version need to comment the part "host: "0.0.0.0""

# 2 . Você precisa executar primeiro o servidor na pasta server. \ You need first start the server inside the folder server.
# 2 . You need first start the server inside the folder server.

# 3 . Necessário TOKEN do Google API para o sistema funcionar, Insira o TOKEN no arquivo .env.example e renomeie para .env
# 3 . Need a Google API TOKEN to start this app correctly. Insert this TOKEN inside .env.example file and rename this fale for .env
```

Server

```sh
# Windows
npm run dev
# Linux
yarn dev
```

Frontend

```sh
# Windows
npm run dev
# Linux
yarn dev
```

Mobile

```sh
# Opção 01 \ Option 01
expo start
# Opção 02 \ Option 02
npm run start
```

***:eye_speech_bubble: Demonstração \ Demonstration***

*Web*

![web_01](https://uploaddeimagens.com.br/images/004/164/477/original/copa_web.PNG?1668604187)

*Mobile*

![mobile_01](https://uploaddeimagens.com.br/images/004/164/794/original/copa_web_copiar.png?1668611658)

***:computer: Tecnologias Utilizadas \ Used Technologies***

1. ***Frontend***
  - [React JS](https://reactjs.org)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Toastfy](https://fkhadra.github.io/react-toastify/introduction)
2. ***Backend***
  - [Node.js](https://nodejs.org/en/)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Fastify](https://www.fastify.io/)
  - [JWT](https://jwt.io/)
3. ***Mobile***
  - [React Native](https://reactnative.dev)
  - [React Navigation](https://reactnavigation.org/)
  - [Native Base](https://nativebase.io/)
  - [Phosphor Icons](https://phosphoricons.com/)
  - [Country List](https://www.npmjs.com/package/country-list)
  - [Expo](https://expo.dev/)
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [TypeScript](https://www.typescriptlang.org/)
4. ***Banco de Dados \ Database***
  - [SQLite](https://https://www.sqlite.org/index.html)
  - [Prisma](https://www.prisma.io//)

---

<p align="center">Obrigado pela visita. :love_you_gesture: \ Thanks for your visit. :black_heart:</p>

 
