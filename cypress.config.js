const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: { grepFilterSpecs: true, grepOmitFiltered: true },
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config)
      // bahmutov/cypress-json-results
      require('cypress-json-results')({
        on,
        filename: false, // do not write JSON file
        githubActionsSummary: 'test',
      })

      // IMPORTANT: return the config object
      return config
    },
  },
})
