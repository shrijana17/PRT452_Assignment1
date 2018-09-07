describe("Process", function() {

    //This will be called before running each spec
    beforeEach(function() {
    });
    describe("when calculateDistance is used  to calculate distance: ", function(){

        //Spec for slope operation
        it("should be able to calculate slope of (1,1) and (2,2)", function() {
            expect(calculateDistance(point1={x:1,y:1},point2={x:2,y:2}).toEqual(1.41));
        });

        //Spec for factorial operation for negative number
        // it("should be able to throw error in factorial operation when the number is negative", function() {
        //     expect(function() {
        //         calc.factorial(-7)
        //     }).toThrowError(Error);
        // });

    });
});