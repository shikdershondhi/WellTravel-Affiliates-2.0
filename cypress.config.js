const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  video: true,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  viewportWidth:1360,
  viewportHeight: 763,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  projectId: 'xoay5e',
  e2e: {
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://wellautotng.staging.welltravel.com/en-GB/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
