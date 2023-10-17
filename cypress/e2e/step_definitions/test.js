
const testData = require("../../fixtures/testData.json")

describe("Test Suite - 1",()=>{
    it("Test block - 1",()=>{
        cy.visit("/");
        cy.get("input[data-test='username']").should("be.visible").type(testData.userName);
        cy.get("input[data-test='password']").should("be.visible").type(testData.password);
        cy.get("input[data-test='login-button']").should("be.visible").click();

        cy.title().should('eq', 'Swag Labs')

        
        


    })

})