describe('countRegNumber', function(){

    it('should take a registration number', function(){
        assert.equal( countRegNumber('CA 182-233'), 1);
    });

    it('should take the length of a string ', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);

    });
});
