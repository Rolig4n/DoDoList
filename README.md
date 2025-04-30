# DoDoList (front)

Projeto front-end do desafio tecnico

## Instruções para rodar o projeto

1. Certifique-se de ter o Node.js instalado em sua máquina

2. Clone este repositório em sua máquina local.

   ```bash
   git clone https://github.com/Rolig4n/DoDoList-front.git
   ```

3. Navegue até o diretório do projeto.

   ```bash
   cd DoDoList-front
   ```

4. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias como o banco de dados

5. Instale as dependencias do projeto

Abra o terminar e digite o comando

```bash
npm install
```

6. Iniciar o projeto

Abra o terminal e digite o seguinte comando

```bash
npx quasar dev
```

## Decições

- O desenvolvimento do frontend foi o mais desafiador pois não tenho tando contato no dia a dia.
  Comecei com o desenvolvimento do CRUD, iniciando pela listagem dos itens. O componente de tabela básico do Quasar já era bem solido, com as funções básicas de filtro e ordenação, já atendendo o requerido. A comunicação com o backend foi simples e fácil nessa parte. Resolvi simplificar a implementação do editar e excluir com o uso de select. Sendo futuramente possivel excluir mais de 1 ao mesmo tempo. Nisso já foi possivel implementar notificações toast com o plugin do Quasar Notify.
- As notificações de tarefas vencidas foi inicialmente implementada como uma notificação só, mas ficou pouco legivel e a implementação atual por notificações individuais é melhor para o usuário.
- O formulário de cadastro é a unica tela que não estou completamente contente pois os componentes não são tão flexiveis, gostária de deixar alguns campos ocultos ou dependendo se for cadastro ou alteração. O campo data foi alterado duas vezes, mas o formato atual é melhor para todos dispositivos, tanto desktop quanto mobile.
- O desing e nome do aplicativo veio de uma digitação errada que virou um trocadilho, "To do list" acabou virando "Dodo list", mesmo sendo em lingua inglesa, o animal Dodo é bem popular e aplicativos com alusão a animais é algo comum.

### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
