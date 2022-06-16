const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  video: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  viewportWidth:1360,
  viewportHeight: 763,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  projectId: 'ikifk8',
  //npx cypress run --record --key 28cc2fb1-43f9-4af5-9303-eae00dae3029

  e2e: {
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },

    //baseUrl: 'https://wellautotng.staging.welltravel.com/en-GB/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
