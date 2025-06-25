describe('Orange HRM', () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    })

    // it('Login', () => {

    //     //cy.get("form[method='post']").as("LoginForm")

    //     cy.get("div.orangehrm-login-container").as("Container")

    //     cy.get('@Container')
    //         .find("input[name='username']")
    //         .type("Admin")
    //         .should('have.value', 'Admin')

    //     cy.get('@Container')
    //         .find("input[name='password']")
    //         .type("admin123")
    //         .should('have.value', 'admin123')

    //     cy.get('@Container')
    //         .find("button[type='submit']")
    //         .click()
    // })


    // afterEach(()=>{
    //     cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();

    //     cy.get("a[href='/web/index.php/auth/logout']").click();
    // })

    it('Login', () => {

        //cy.get("form[method='post']").as("LoginForm")

        //cy.get("div.orangehrm-login-container").as("Container")
        cy.xpath("//div[@class='orangehrm-login-container']").as("Container")


        cy.xpath('@Container')
            .find("input[name='username']")
            .type("Admin")
            .should('have.value', 'Admin')

        cy.xpath('@Container')
            .find("input[name='password']")
            .type("admin123")
            .should('have.value', 'admin123')

        cy.xpath('@Container')
            .find("button[type='submit']")
            .click()
    })

})