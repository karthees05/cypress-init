import {  Given,  When,  Then,  And,} from "@badeball/cypress-cucumber-preprocessor";
// import { beforeEach,before,afterEach, after} from "mocha";
import {homePage} from "@pages/HomePage";

const testData = require("../../fixtures/testData.json");
const endPoints = require("../../fixtures/endPoints.json");
const userName = Cypress.env("testUser");
const password = Cypress.env("password");

var app_url = endPoints.ui_url;

Given("user goes to the webpage", () => {
    // this / will get the cypress config baseURL
    cy.visit('/');  

  // cy.visit(app_url);  
  homePage.clickGetLink();
});
And("user enters {string} , {string}",(userName, password)=>{
  homePage.enterUserDetails(userName, password);

});