const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hmsy2w",
  watchForFileChanges:false,
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
