const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
module.exports = defineConfig({
   e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/integration/*.feature",
    "baseUrl": "https://www.vr.com.br/",
    "viewportWidth": 1024,
    "viewportHeight": 768

  },
});
