describe('function countRegNumber', function(){

    it(' should count the registration numbers in a string ', function(){
        assert.equal(countRegNumber('CY 342-432 ,CK 234-345,CF 453-455'),3);
    });
    it('should return the number of registration numbers in the string ', function(){
        assert.equal(countRegNumber('CF 454-345,CF 876-345,CA 543-345,CJ 454-234'),4);
    });
});
