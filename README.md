# Introdução

Projeto (Fullstack) Trybe Futebol Club desenvolvido durante o módulo de Backend
na <a href='https://www.betrybe.com/'>TRYBE</a>.

## Detalhes

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**

- Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
- Tem o papel de fornecer dados para o serviço de _backend_.
- Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`;
- Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**

- Será o ambiente que você realizará a maior parte das implementações exigidas.
- Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
- Sua aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
- Garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;
- Todas as dependências extras (tal como `joi`, `boom`, `express-async-errors`...) devem ser listadas em `app/backend/packages.npm`.

3️⃣ **Front-end:**

- O front já está concluído, não é necessário realizar modificações no mesmo. A única exceção será seu Dockerfile que precisará ser configurado.
- Todos os testes a partir do requisito de login usam o `puppeteer` para simular uma pessoa acessando o site `http://localhost:3000/`;
- O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que você deve construir nos requisitos.
- Recomendamos que sempre que implementar um requisito no back-end acesse a página no front-end que consome a implementação para validar se está funcionando como esperado.

4️⃣ **Docker:**

- O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
- Você **deve** configurar as `Dockerfiles` corretamente nas raízes do `front-end` e `back-end`, para conseguir inicializar a aplicação;

</details>

<details>
  <summary><strong> Rotas</strong></summary><br />

1️⃣ **Rotas de usuários:**

- POST /login
  - responsável por registrar o login e retornar um token de usuário.
- GET /login/validate
  - responsável validar o login e retornar a 'role' do usuário.

2️⃣ **Rotas de times:**

- GET /teams
  - responsável por retornar times cadastrados no DB.
- GET /teams/:id
  - responsável por retornar times cadastrados no DB através do ID.

3️⃣ **Rotas de Partidas:**

- GET /matches
  - responsável por retornar todas as partidas.
- POST /matches/
  - responsável por cadastrar uma partida no DB.
    -PATCH /matches/:id
  - responsável por atualizar goas de uma partida específica
- PATCH /matches/:id/finish
  - responsável por atualizar o status de uma partida em andamento para partida finalizada ('inProgress: false') no DB.

4️⃣ **Rotas de Líderes:**

- GET /leaderboard
  - responsável por retornar os líderes do campeonato (dentro ou fora de casa).
- GET /leaderboard/home
  - responsável por retornar os líderes do campeonato jogando em casa.
- GET /leaderboard/away
  - responsável por retornar os líderes do campeonato jogando fora de casa

</details>
