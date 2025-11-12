describe('Teste de login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://chat.karoo.com.br')
    cy.get('[data-testid="login-email-input"]').type('joao.sup.cir@alterdata.com.br')
    cy.get('[data-testid="login-password-input"]').type('Botafogo#7')
    cy.get('[data-testid="login-button"]').click()
    cy.wait(3000)
    cy.url().should('eq', 'https://chat.karoo.com.br/contas')
    cy.get('[data-testid="account-Conta Comercial"]').click()
    cy.wait(15000)
    cy.get('[class="ant-modal-close-x"]').click()

  })
})