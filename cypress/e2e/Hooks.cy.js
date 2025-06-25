describe('Hooks1',()=>{

    before(()=>{
        console.log("Before...")
    })
    beforeEach(()=>{
        console.log("Before Each...")
    })
    it('Test Case 1',()=>{
        console.log('This is Test Case 1')
    })

    it('Test Case 2',()=>{
        console.log('This is Test Case 2')
    })
    afterEach(()=>{
        console.log("After Each...")
    })
    after(()=>{
        console.log("After...")
    })
})