const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "kac7ue",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
              resultsDir: "allure-results",
            });
            return config;
    },
  },
});
