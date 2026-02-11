describe('User Registration and Node Setup', () => {
  it('should allow a user to register and set up a node', () => {
    cy.visit('https://dashboard.meson.network/register')

    // Fill out the registration form
    cy.get('input[name="email"]').type('testuser@example.com')
    cy.get('input[name="password"]').type('TestPassword123')
    cy.get('input[name="confirmPassword"]').type('TestPassword123')
    cy.get('button[type="submit"]').click()

    // Verify registration success
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome, testuser@example.com')

    // Navigate to the Nodes page
    cy.get('a[href="/nodes"]').click()

    // Set up a new node
    cy.get('button').contains('Add Node').click()
    cy.get('input[name="nodeName"]').type('Test Node')
    cy.get('input[name="nodeIP"]').type('192.168.1.1')
    cy.get('input[name="nodePort"]').type('443')
    cy.get('button[type="submit"]').click()

    // Verify node setup success
    cy.contains('Node setup complete')
    cy.get('table').contains('td', 'Test Node')
  })
})
