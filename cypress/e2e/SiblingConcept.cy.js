describe('Siblings', () => {

    it('Siblings Demo',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        // cy.log(cy.get("div[class='form-group']").eq(0).children())

        // cy.get("input#name").siblings().its('length').as('siblingCount')
        // cy.log(cy.get("input#name").siblings().its('length'))
        // //cy.log('@siblingCount')
        // //cy.log(cy.get("input#name").siblings().its('length'))
        // // cy.get('@siblingCount').then((count)=>{
        // //     cy.log("Number "count);
        // // })

        // cy.get('@siblingCount').should('be.greaterThan',0)

        // cy.get("input#name").prev().its('length').as('prevElementCount')
        // cy.get(cy.get("input#name").prev().its('length'))
        // cy.get('@prevElementCount').should('be.greaterThan',0)

        // cy.get("input#name").next().its('length').as('nextElementCount')
        // cy.get(cy.get("input#name").prev().its('length'))
        // cy.get('@nextElementCount').should('be.greaterThan',0)
        

        // cy.get("input#name").nextAll().its('length').as('nextAllCount')
        // cy.get(cy.get("input#name").prev().its('length'))
        // cy.get('@nextAllCount').should('be.greaterThan',0)

        // cy.get("input#name").prevAll().its('length').as('prevAllCount')
        // cy.get(cy.get("input#name").prev().its('length'))
        // cy.get('@prevAllCount').should('be.greaterThan',0)

        //cy.get("label[for='textbox']").eq(0).prev().its('length')

        cy.get("input#name").nextAll().invoke('text').then((siblingtext) => {
            cy.log(siblingtext);
            
        })
    })
    

})