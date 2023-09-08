# blog-api

## Sumário

- [blog-api](#blog-api)
  - [Sumário](#sumário)
  - [Documentação](#documentação)
  - [Motivação](#motivação)
    - [Hardware utilizado para o teste de carga](#hardware-utilizado-para-o-teste-de-carga)
  - [Resultado do teste de carga](#resultado-do-teste-de-carga)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Documentação

Durante a [execução da API](#como-rodar), a documentação estará disponível [aqui](http://localhost:3000/docs).

## Motivação

Este app é uma API de blog projetada para cadastrar autores de publicações. Cada usuário tem a capacidade de criar e gerenciar múltiplos posts. O verdadeiro destaque desta API reside na sua robustez, especialmente quando submetida a testes de carga. Durante um [teste recente](#relatório-do-artillery), a API demonstrou sua capacidade de lidar com 1.500 requisições em um intervalo de apenas dez segundos, graças à implementação de clusterização que utiliza todas as threads do processador. Além disso, a API otimiza o desempenho ao manter consultas recentes em cache por um período de 60 segundos, proporcionando uma experiência ágil aos usuários.

Este foi o segundo repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Web Services.

| [&larr; Repositório anterior](https://github.com/mdccg/artillery-demo) | [Próximo repositório &rarr;](#) |
|-|-|

### Hardware utilizado para o teste de carga

| Hardware | Modelo |
|-|-|
| Processador | Intel&#9415; Core&trade; i3-6006U CPU @ 2.00GHz |
| Memória RAM | 4GiB |
| Disco | CT240BX500SSD1 (240GB) |
| Clock | 2.00GHz |

<details>
  <summary>
    
  ## Resultado do teste de carga
  </summary>

  ```console
  $ artillery run ./find_posts.yaml 
  Test run id: t4hme_mfprgcg3x66ndbjypjpnm8nxny9wz_jfd3
  Phase started: unnamed (index: 0, duration: 10s) 16:27:08(-0400)

  --------------------------------------
  Metrics for period to: 16:27:10(-0400) (width: 1.043s)
  --------------------------------------

  http.codes.200: ................................................................ 117
  http.downloaded_bytes: ......................................................... 6199834
  http.request_rate: ............................................................. 129/sec
  http.requests: ................................................................. 130
  http.response_time:
    min: ......................................................................... 3
    max: ......................................................................... 450
    median: ...................................................................... 50.9
    p95: ......................................................................... 314.2
    p99: ......................................................................... 361.5
  http.responses: ................................................................ 117
  vusers.completed: .............................................................. 116
  vusers.created: ................................................................ 131
  vusers.created_by_name.Find one-hundred posts within ten seconds: .............. 131
  vusers.failed: ................................................................. 0
  vusers.session_length:
    min: ......................................................................... 18.9
    max: ......................................................................... 473.2
    median: ...................................................................... 94.6
    p95: ......................................................................... 361.5
    p99: ......................................................................... 407.5


  Phase completed: unnamed (index: 0, duration: 10s) 16:27:18(-0400)

  --------------------------------------
  Metrics for period to: 16:27:20(-0400) (width: 9.038s)
  --------------------------------------

  http.codes.200: ................................................................ 1383
  http.downloaded_bytes: ......................................................... 73970648
  http.request_rate: ............................................................. 153/sec
  http.requests: ................................................................. 1370
  http.response_time:
    min: ......................................................................... 0
    max: ......................................................................... 568
    median: ...................................................................... 25.8
    p95: ......................................................................... 376.2
    p99: ......................................................................... 497.8
  http.responses: ................................................................ 1383
  vusers.completed: .............................................................. 1384
  vusers.created: ................................................................ 1369
  vusers.created_by_name.Find one-hundred posts within ten seconds: .............. 1369
  vusers.failed: ................................................................. 0
  vusers.session_length:
    min: ......................................................................... 5.6
    max: ......................................................................... 616.7
    median: ...................................................................... 48.9
    p95: ......................................................................... 407.5
    p99: ......................................................................... 528.6


  All VUs finished. Total time: 13 seconds

  --------------------------------
  Summary report @ 16:27:22(-0400)
  --------------------------------

  http.codes.200: ................................................................ 1500
  http.downloaded_bytes: ......................................................... 80170482
  http.request_rate: ............................................................. 141/sec
  http.requests: ................................................................. 1500
  http.response_time:
    min: ......................................................................... 0
    max: ......................................................................... 568
    median: ...................................................................... 27.9
    p95: ......................................................................... 368.8
    p99: ......................................................................... 497.8
  http.responses: ................................................................ 1500
  vusers.completed: .............................................................. 1500
  vusers.created: ................................................................ 1500
  vusers.created_by_name.Find one-hundred posts within ten seconds: .............. 1500
  vusers.failed: ................................................................. 0
  vusers.session_length:
    min: ......................................................................... 5.6
    max: ......................................................................... 616.7
    median: ...................................................................... 50.9
    p95: ......................................................................... 399.5
    p99: ......................................................................... 528.6
  ```
</details>

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Framework back-end | [Express.js](https://expressjs.com/pt-br/) |
| Banco de dados | [SQLite](https://www.sqlite.org/) |
| Mapeamento Objeto-Relacional | [TypeORM](https://typeorm.io/) |
| Armazenamento de estrutura de dados em memória | [Redis](https://redis.io/) |
| Virtualização do Redis | [Docker](https://docker.io/) |
| Ferramenta de teste de carga | [Artillery](https://www.artillery.io/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Docker](https://docs.docker.com/engine/install/);
- [Artillery](https://www.artillery.io/).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Com o Docker instalado, execute o comando abaixo para levantar o _container_. Certifique-se de estar no diretório do arquivo `docker-compose.yml`;

```console
$ docker-compose up -d
```

O parâmetro `-d` serve para desocupar o shell de comando logo após a execução do comando. É uma boa convenção, ao encerrar a execução do app, derrubar o _container_ levantado através do comando:

```console
$ docker-compose down
```

5. Execute o seguinte comando para executar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

6. Execute o script `populate` para popular o banco de dados. Urgente: é altamente recomendado que você tenha preparado, no mínimo, um litro de café para esta etapa; visto que ela pode levar um bocado de tempo e isso depende diretamente da capacidade da sua máquina.

7. Instale o Artillery em sua máquina através do seguinte comando:

```console
$ npm i -g artillery@latest
```

8. Com o _container_ levantado e o app em execução, "bombardeie" a API com requisições através do seguinte comando:

```console
$ artillery run ./load_tests/find_posts.yaml
```

Certifique-se de estar na raiz do projeto para executar o comando acima.