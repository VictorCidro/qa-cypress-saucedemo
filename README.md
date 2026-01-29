# 🧪 Automação de Testes – Sauce Demo (Cypress)

Este projeto tem como objetivo demonstrar a criação de testes automatizados E2E utilizando **Cypress**, cobrindo cenários funcionais e negativos do fluxo de compra da aplicação **Sauce Demo**.

O projeto foi desenvolvido com foco em boas práticas de QA, incluindo documentação de cenários, rastreabilidade e automação baseada em fluxo de negócio.

-------------------------------------------------------------------------------------------------------------------------------------------------

## 🔗 Aplicação testada
- **URL:** https://www.saucedemo.com
- **Tipo:** Aplicação web para fins educacionais e testes de automação

-------------------------------------------------------------------------------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas
- **Node.js**
- **Cypress**
- **JavaScript**
- **VS Code**

-------------------------------------------------------------------------------------------------------------------------------------------------

## 📂 Estrutura do projeto

```text
cypress/
 └── e2e/
     ├── login.cy.js        # Cenários de login (OK e NOK)
     └── checkout.cy.js     # Fluxo completo de compra
cypress.config.js
package.json
README.md
