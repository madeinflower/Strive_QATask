const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://www.automationexercise.com',
    screenshotOnRunFailure: false,
    specPattern: 'cypress/e2e/*.spec.js'
  },
});
