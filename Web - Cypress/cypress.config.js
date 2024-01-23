const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    //testIsolation: false,
    experimentalStudio: true,
    env: {
      username: "ritter@tester.com",
      password: "Sanber51",
      uneg: "testnoaddress@tester.com",
      pasneg: "Test2023!"
    },


  e2e: {

    baseUrl:'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://magento.softwaretestingboard.com/customer/account/create/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 6000,
    chromeWebSecurity: false

    baseUrl: 'https://magento.softwaretestingboard.com/',
    env: {
      //untuk membuat variabel
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 3500,
    
  },
});
