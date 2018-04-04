describe('countRegNumber', function(){

    it('should take a string parameter of CJ 123-543', function(){
        assert.equal(2, countRegNumber('CJ'));
    });

    it('should take a string parameter of CA 233 143', function(){
        assert.equal(10, countRegNumber('CA 233 143'));

    });
});
