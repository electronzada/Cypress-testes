describe('Testes de login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('joao@teste.com')
    cy.get('[data-testid="senha"]').type('joao123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type('Produto Ola Mundo')
    cy.get('[data-testid="preco"]').type('90')
    cy.get('[data-testid="descricao"]').type('Descrição do Produto Teste')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()
  })
})