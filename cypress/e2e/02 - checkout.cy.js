describe('Carrinho e Checkout - Sauce Demo', () => {

  // Pré-condição: usuário logado
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')
  })

  // CT-06 - Adicionar produto ao carrinho
  it('CT-06 - Deve adicionar produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')
  })

  // CT-07 - Visualizar carrinho com produto
  it('CT-07 - Deve exibir produto no carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    cy.url().should('include', 'cart')
    cy.get('.cart_item').should('be.visible')
  })

  // CT-08 - Finalizar compra com dados válidos
  it('CT-08 - Deve finalizar compra com sucesso', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Victor')
    cy.get('[data-test="lastName"]').type('Cidro')
    cy.get('[data-test="postalCode"]').type('123456')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    cy.get('.complete-header')
      .should('be.visible')
      .and('contain', 'Thank you for your order')
  })

  // CT-09 - Checkout sem preencher dados obrigatórios
  it('CT-09 - Deve exibir erro ao tentar checkout sem dados', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')
  })

  // CT-10 - Remover produto do carrinho
  it('CT-10 - Deve remover produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.cart_item').should('not.exist')
  })

})
