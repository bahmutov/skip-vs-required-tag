// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import registerCypressGrep from '@bahmutov/cy-grep/src/support'
registerCypressGrep()

// SKIP https://github.com/acme/project/issues/1
it('deletes an item', { requiredTags: '@skip' }, () => {
  expect(1).to.equal(2)
})
