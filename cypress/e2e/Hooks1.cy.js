describe('Orange HRM',()=>{

    // beforeEach(()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //     cy.get("input[name='username']").type("Admin");

    //     cy.get("input[name='password']").type("admin123")

    //     cy.get("button[type='submit']").click();

    //     cy.get('h6').eq(0).should('contain','Dashboard')
    // })

    it('Verify Admin',()=>{
        cy.get("a[href='/web/index.php/admin/viewAdminModule']").click();

        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('be.visible')
    })

    it('Verify PIM',()=>{
        cy.get("a[href='/web/index.php/pim/viewPimModule']").click();

        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('be.visible')
    })

    // afterEach(()=>{
    //     cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();

    //     cy.get("a[href='/web/index.php/auth/logout']").click();
    // })

})