describe('Fluxo de Login e Cadastro de Produto - Serverest', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })

  it('Deve realizar login e cadastrar um novo produto com sucesso', () => {

    // 🔐 Login
    cy.get('[data-testid="email"]').type('joao@teste1.com')
    cy.get('[data-testid="senha"]').type('joao123')
    cy.get('[data-testid="entrar"]').click()

    // ✅ Validação de login
    cy.url({ timeout: 15000 }).should('include', '/admin/home')
    cy.get('[data-testid="cadastrarProdutos"]').should('be.visible').click()

    // 🧾 Cadastro de produto
    cy.get('[data-testid="nome"]').type('Produto Olá Mundo')
    cy.get('[data-testid="preco"]').type('90')
    cy.get('[data-testid="descricao"]').type('Descrição do Produto Teste')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()

    // ✅ Validação de sucesso
    cy.contains('Produto Olá Mundo', { timeout: 10000 }).should('be.visible')
  })
})
