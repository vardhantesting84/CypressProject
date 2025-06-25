describe('Orange HRM',()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin");

        cy.get("input[name='password']").type("admin123")

        cy.get("button[type='submit']").click();

        cy.get('h6').eq(0).should('contain','Dashboard')
    })

    it('Verify Admin',()=>{
        cy.get("a[href='/web/index.php/admin/viewAdminModule']").click();

        //console.log(cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").text())//Admin

        //cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('be.visible')

        console.log(cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").invoke('text'))
        cy.log(cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").invoke('text'))
        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").invoke('text').should('contain','Admin')
    })

    it('Verify PIM',()=>{
        cy.get("a[href='/web/index.php/pim/viewPimModule']").click();

        //console.log(cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").text())//PIM

        //cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('be.visible')

        console.log(cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").invoke('text'))
        cy.log(cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").invoke('text'))
        cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").invoke('text').should('contain','PIM')
    })

    // afterEach(()=>{
    //     cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();

    //     cy.get("a[href='/web/index.php/auth/logout']").click();
    // })

})