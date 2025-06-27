describe('DatePicker', () => {
    it('Approach 1', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        //cy.get("input#datepicker").type("06/27/2024").should('have.value',"06/27/2024")

        //cy.get("input#txtDate").type("27/06/2024").should('have.value',"27/06/2024")

    })

    it('Approach 2', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("input#datepicker").click();

        cy.get("a[title='Prev']").as('prevBtn')
        cy.get("span.ui-datepicker-month").as('month')
        cy.get("span.ui-datepicker-year").as('year')


        function SelectMonthYear(targetMonth, targetYear)
        {
            cy.get('@month').invoke('text').then(monthText =>{
                cy.get('@year').invoke('text').then(yearText =>{
                    
                    if(monthText !== targetMonth || yearText!==targetYear)
                    {

                        cy.get('@prevBtn').click();
                        SelectMonthYear(targetMonth,targetYear)
                    }

                })
            })
        }

        SelectMonthYear("June","2024")
        cy.get("a.ui-state-default").contains("27").click();

    })

    it('Approach 3', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("input#txtDate").click();

        cy.get("select[class='ui-datepicker-month']").select("Jun")
        cy.get("select[class='ui-datepicker-year']").select("2024")

        cy.get("a[data-date='27']").contains("27").click();

    })

})