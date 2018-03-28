describe('countRegNumber', function(){

    it('should count the registration number', function(){
        assert.deepEqual(2, countRegNumber('CJ'));
    });

    it('should list regnumbers', function(){
        assert.equal(10, countRegNumber('CA 233 143'));

    });
});
