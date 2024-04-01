# Aplicação Frontend em React com Material UI

## Descrição

Este é um projeto em React que consiste em uma aplicação responsiva com três telas principais: login, registro de usuário e a tela inicial (home). A estilização da aplicação é feita utilizando o Material UI, proporcionando uma interface moderna e agradável.

O diferencial desta aplicação é a implementação de um sistema de autenticação de dois fatores (2FA) durante o registro de usuário. Após preencher os dados básicos do usuário, é possível habilitar a autenticação de dois fatores. Nesse caso, um QR code é gerado, que pode ser escaneado por um aplicativo de autenticação para gerar um código numérico. Esse código numérico é então utilizado para finalizar a autenticação e registrar o usuário. 🔐📱

## Funcionalidades

- [x] Login: Permite que usuários registrados façam login na aplicação.
- [x] Registro de Usuário: Permite que novos usuários se cadastrem na aplicação, com a opção de habilitar autenticação de dois fatores.
- [x] Tela Inicial (Home): Após o login bem-sucedido, os usuários têm acesso à tela inicial da aplicação, onde podem acessar recursos adicionais ou funcionalidades específicas da aplicação.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript de código aberto para construir interfaces de usuário.
- Material UI: Biblioteca de componentes de IU React para criar aplicativos visualmente atraentes e responsivos.
- React Router: Biblioteca para navegação entre diferentes componentes React.
- Typescript: Linguagem de programação que adiciona tipagem estática opcional ao JavaScript, fornecendo recursos avançados de autocompletar e verificação de erros durante o desenvolvimento.
- Axios: Cliente HTTP baseado em Promises para fazer requisições HTTP no navegador e no Node.js. É amplamente utilizado para consumir APIs em aplicações frontend e backend.
- JWT Decode: Biblioteca para decodificar e verificar JSON Web Tokens (JWT) em aplicações JavaScript. É comumente usado para extrair informações do payload de um token JWT, como o ID do usuário ou outras informações de autenticação.

### 🎲 Rodando o Projeto

```bash
$ git clone https://github.com/felippepg/authentication-service-frontend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd /authentication-service-frontend

# Instale todas as dependências necessárias para rodar o projeto
$ yarn OU npm install (dependendo do seu gerenciador de pacotes)

# Para iniciar o projeto em modo de desenvolvimento
$ yarn start OU npm run start

```

Desenvolvido Por: Felippe Pires 🚀🎨
