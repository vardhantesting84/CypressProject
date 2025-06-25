describe('Aliases Example',() => {

    it('Alaises1',function(){

        //cy is global object that provides all the commands for writing tests.
        cy.visit("https://testautomationpractice.blogspot.com/");

        //Assigning name for element
        cy.get("input#name").as('nameEdtBx');
        cy.get("input#email").as('emailEdtBx')
        cy.get("input#male").as('maleRdBtn')
        cy.get("input#wednesday").as('wednesdayCckBx')


        //using aliases perfomr the actions
        cy.get('@nameEdtBx').type("Sachin")
        cy.get('@emailEdtBx').type("Sachin@gmail.com")
        cy.get('@maleRdBtn').click()
        cy.get('@wednesdayCckBx').check()

    })

    it('Using Class Attribute',() => {

        cy.visit("https://testautomationpractice.blogspot.com/");

        cy.get('label.form-check-label').as('listItems')

        cy.get('@listItems').each(($ele,index) =>{
            cy.log(`Item ${index} : ${$ele.text()}`)
        })

    })

})