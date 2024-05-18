# Teste RBR Digital Desenvolvedor Fullstack 

App dashboard administrativo

## Pre-requisitos:

### NodeJS
- Para instalar o node siga o link https://nodejs.org/en/download/package-manager/current
- Minimo versão 20.13.1
- Para verificar a sua versão utilize:
```bash
node -v
```

### Docker
- Utilize o link https://www.docker.com/products/docker-desktop/ para instalar o Docker na sua maquina localmente


## Makefile
O arquivo `Makefile` foi criado para simplificar as interações com as aplicações.

## Rodando as aplicações
- Utilize o comando `make start` na raiz do projeto para iniciar o download da imagem do MongoDB, e o build dos projetos de front e back end.


## Endponts:

- Obter Todos os Funcionários
    - Endpoint: `GET /employees`
    - Descrição: Recupera uma lista de todos os funcionários.
    - Response: Retorna um array JSON de objetos de funcionários.

- Obter Funcionário por ID
  - Endpoint: `GET /employees/:id`
  - Descrição: Recupera informações detalhadas sobre um funcionário específico pelo seu identificador único.
  - Response: Retorna um objeto de funcionário único se encontrado, caso contrário retorna uma mensagem de erro.

- Criar Novo Funcionário
  - Endpoint: `POST /employees`
  - Descrição: Adiciona um novo funcionário ao sistema.
  - Payload: Requer um objeto JSON representando os dados do novo funcionário (por exemplo, nome, departamento, cargo).
  - Response: Retorna o objeto do funcionário criado com um ID atribuído.

- Atualizar Funcionário
  - Endpoint: `PATCH /employees/:id`
  - Descrição: Atualiza as informações de um funcionário existente identificado pelo seu ID único.
  - Payload: Requer um objeto JSON com os dados atualizados do funcionário.
  - Response: Retorna o objeto do funcionário atualizado ou uma mensagem de erro se o funcionário não existir.

- Excluir Funcionário
  - Endpoint: `DELETE /employees/:id`
  - Descrição: Remove o funcionário do sistema pelo seu ID.
  - Response: Retorna um status de sucesso se a exclusão foi bem-sucedida, caso contrário retorna uma mensagem de erro.
