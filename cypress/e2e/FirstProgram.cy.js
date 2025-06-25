describe('BPB Online',()=>{

  it('Verify Title',()=>{

    cy.visit("https://practice.bpbonline.com/");

    cy.title().should('eq','BPB Online')

  })
})