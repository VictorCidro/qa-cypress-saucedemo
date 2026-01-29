describe('Login - Sauce Demo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  // CT-01 - Login com credenciais válidas
  it('Deve realizar login com usuário válido', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')
  })

  // CT-02 - Login com senha inválida
  it('Deve exibir erro ao logar com senha inválida', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senha_invalida')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  // CT-03 - Login com usuário bloqueado
  it('Deve impedir login de usuário bloqueado', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'locked out')
  })

  // CT-04 - Login sem informar usuário
  it('Deve exibir erro ao tentar logar sem usuário', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })

  // CT-05 - Login sem informar senha
  it('Deve exibir erro ao tentar logar sem senha', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')
  })

})
