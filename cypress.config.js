const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: { grepFilterSpecs: true, grepOmitFiltered: true },
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config)
      // IMPORTANT: return the config object
      return config
    },
  },
})
