module.exports = {


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: "**/node_modules/**",
    specPattern: "**/*.spec.js",
    pageLoadTimeout: 30000,
    "chromeWebSecurity": false,
    "reporter": "mochawesome",
      "reporterOptions": {
        "reportDir": "cypress/reports",
        "overwrite": false,
        "html": false,
        "json": true
      },
  }
};
