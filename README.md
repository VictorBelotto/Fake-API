# Fake API para Testes

Este é um projeto simples que implementa uma Fake API usando JSON Server. A Fake API fornece endpoints simulados para testar aplicativos frontend durante o desenvolvimento.

## Como Usar

Siga estas instruções para configurar e executar a Fake API em sua máquina local.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

### Instalação

1. Clone este repositório para o seu ambiente de desenvolvimento:

    ```bash
    git clone https://github.com/seu-usuario/fake-api.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd fake-api
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

### Execução

Para iniciar a Fake API manualmente, utilize o seguinte comando:

```bash
json-server --watch db.json --port 3001
