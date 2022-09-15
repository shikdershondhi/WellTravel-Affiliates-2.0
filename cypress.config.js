const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  experimentalWebKitSupport: true,
  video: true,
  trashAssetsBeforeRuns: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  viewportWidth:1360,
  viewportHeight: 763,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  projectId: 'ikifk8',

  e2e: {
    //experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    //baseUrl: 'https://wellautotng.staging.welltravel.com/en-GB/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
