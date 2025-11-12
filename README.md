# Projeto de Testes Automatizados - Cypress

## Como executar o projeto

1. Clone este repositório:
   git clone https://github.com/electronzada/Cypress-testes.git

2. Instale as dependências:
   npm install

3. Execute os testes:
   - Modo interativo:
     npx cypress open
   - Modo headless:
     npx cypress run

---

## Variáveis de ambiente

Crie um arquivo chamado cypress.env.json na raiz do projeto com suas credenciais de teste:

{
  "USER_EMAIL": "seuemail@teste.com",
  "USER_PASS": "suaSenhaDeTeste"
}

Este arquivo não deve ser versionado (já está protegido no .gitignore).

---

## Estrutura do projeto

cypress/
├── e2e/                → Testes automatizados
├── fixtures/           → Massa de dados
├── support/            → Comandos e configurações
cypress.config.js        → Configuração principal
package.json             → Dependências do projeto
