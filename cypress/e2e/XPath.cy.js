import 'cypress-xpath'

describe('Orange HRM',()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath("//input[@name='username']").type("Admin");

        cy.xpath("//input[@name='password']").type("admin123")

        cy.xpath("//button[text()=' Login ']").click();

        cy.get('h6').eq(0).should('contain','Dashboard')
    })

    it('Verify Admin',()=>{
        cy.xpath("//span[text()='Admin']").click();

        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('be.visible')
    })

    it('Verify PIM',()=>{
        cy.xpath("//span[text()='PIM']").click();

        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('be.visible')
    })

    afterEach(()=>{
        cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();

        cy.get("a[href='/web/index.php/auth/logout']").click();
    })

})