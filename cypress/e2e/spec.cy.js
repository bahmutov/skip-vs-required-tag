// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// SKIP https://github.com/acme/project/issues/1
it('deletes an item', { requiredTags: '@skip' }, () => {
  expect(1).to.equal(2)
})

// SKIP https://github.com/acme/project/issues/2
it('updates an item', { requiredTags: '@skip' }, () => {
  expect(1).to.equal(1)
})
