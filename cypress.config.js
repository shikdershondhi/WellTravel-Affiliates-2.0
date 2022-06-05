const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  video: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  projectId: 'xoay5e',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://wellautotng.staging.welltravel.com/en-GB',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
