describe('Fluxo de Login - Chat Karoo', () => {

  beforeEach(() => {
    cy.visit('https://chat.karoo.com.br')
  })

  it('Deve realizar login com sucesso e acessar conta comercial', () => {

    // 🔐 Login
    cy.get('[data-testid="login-email-input"]').type(Cypress.env('USER_EMAIL'))
    cy.get('[data-testid="login-password-input"]').type(Cypress.env('USER_PASS'))
    cy.get('[data-testid="login-button"]').click()

    // ✅ Validação de redirecionamento
    cy.get('[data-testid="account-Conta Comercial"]', { timeout: 20000 })
      .should('be.visible').click()

    // Validar a URL
    cy.url().should('include', '/contas')

    // 🔍 Aguarda o modal carregar e fecha
    cy.get('.ant-modal-close-x', { timeout: 20000 }).should('be.visible').click()
  })
})
