///<reference types="cypress"/>

describe('Assertions', () => {

    // it('Elementy Existence and Visibility',()=>{
    //     cy.visit("https://practice.bpbonline.com/")

    //     cy.get('h1').should('exist');//true
    //     cy.get("a[role='button']").eq(1).should('exist');
    //     cy.get('h1').should('not.be.visible');//true

    // })
    // it('Element Exist and Visible', () => {


    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //     //cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('not.exist')
    //     //cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('not.be.visible')

    //     cy.get("input[name='username']").type('adsfasd');

    //     cy.get("input[name='password']").type("sdfasdf");

    //     cy.get("button[type='submit']").click();

    //     cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('exist')
    //     cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible')


    // })

    // it('Text Visiblity', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.get("input[name='username']").type('adsfasd');

    //     cy.get("input[name='password']").type("sdfasdf");

    //     cy.get("button[type='submit']").click();

    //     cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible')

    //     cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text','Invalid credential');

    // })

    it('Attribute Visibility', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")


        cy.get("input#name").should('be.visible');

        cy.get("input#name").should('have.attr','placeholder')

        cy.get("input#name").should('have.attr','placeholder','Enter Name')
    })

    // it('Attribute Visibility', () => {
    //     cy.visit("https://testautomationpractice.blogspot.com/")


    //     cy.get("input#name").should('be.visible');

    //     cy.get("input#name").should('have.attr','placeholder')

    //     cy.get("input#name").should('have.attr','placeholder','Enter Name')
    // })

    // it('Length Assertions',()=>{
    //     cy.visit("https://testautomationpractice.blogspot.com/")

    //     cy.get('label.form-check-label').should('have.length',9)
    // })

//    it('Chaining Assertions', () => {
//         cy.visit("https://testautomationpractice.blogspot.com/")

//         cy.get("input#name")
//         .should('be.visible')
//         .should('have.attr','placeholder')
//         .should('have.attr','placeholder','Enter Name')
        
//     })

       it('Expect Assertions', () => {
        cy.visit("https://practice.bpbonline.com/")

        cy.get('h1').should(($ele) => {

            expect($ele.text()).to.eq("Welcome to BPB Online")
            expect($ele).to.be.visible
            
        })
        
        
    })

})