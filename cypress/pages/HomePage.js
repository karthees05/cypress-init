class HomePage {
  elements = {
    getLink: () => cy.get(".a").contains("get"),
    userName:()=> cy.get("input[data-test]")
  };

  clickGetLink() {
    this.elements.getLink().should("be.visible");
  }
  enterUserDetails(userName, password){

  }
}
export const homePage = new HomePage();
