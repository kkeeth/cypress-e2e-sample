/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('NPM Login', () => {
  it('should navigate to the Sign-in page', () => {
    cy.visit('https://npmjs.com/')

    cy.get('h1').contains('Build amazing things')
    // cy.contains('Build amazing things')


    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="login"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/login')
  })

  it('should sign in and navigate to the mypage of npmjs site', () => {
    cy.visit('https://npmjs.com/login')

    // Enter each input forms
    cy.get('#login_username').type('kkeeth').should('have.value', 'kkeeth')
    cy.get('#login_password').type('e21n5214@@').should('have.value', 'e21n5214@@')

    // Submit sign-in
    cy.get('button').contains('Sign In').click()

    // Navigate to otp page
    cy.contains('Enter a One-time Password')
  })
})
