describe("CSS Selectos",() => {

    it("CSS Selector Demo", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        //1. Identifying the element
        //2. Action - entring the value
        //cy.get("input#name").type("Sachin");
        //cy.get("input[placeholder='Enter Name']").type("Sachin")
        //cy.get("input[id='name']").type("Sachin")
        cy.get("input[placeholder*=' N']").type("Sachin")
        
    })
})