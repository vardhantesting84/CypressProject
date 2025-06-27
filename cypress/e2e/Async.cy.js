describe('Asynchronous Programming',()=>{

    // it('Normal Way',()=>{

    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //     cy.get("input[name='username']").type("Admin");

    //     cy.get("input[name='password']").type("admin123")

    //     cy.get("button[type='submit']").click();

    //     cy.get('h6').eq(0).should('contain','Dashboard')
    // })

        it('Using .then() method',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy
        .get("input[name='username1']")
        .then(($inputUsername)=>{
            //$inputUsername.type("Admin")
            cy.wrap($inputUsername).type("Admin")
        })

        cy
        .get("input[name='password']")
        .then(($inputPassword)=>{
                //$inputPassword.type("admin123")
                cy.wrap($inputPassword).type("admin123")
        })

        cy.get("button[type='submit']")
        .then(($loginBtn)=>{
            //$loginBtn.click();
            cy.wrap($loginBtn).click()
        })

        cy.get('h6').eq(0).should('contain','Dashboard')
    })

})