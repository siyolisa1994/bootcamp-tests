describe('The countAllPaarl function', function(){

    it('check if registration Num is from paarl', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CJ 435 859, CA 977 908','CJ'));
    });

    it('should return false if the registration number is not from Paarl', function(){
        assert.equal(0, countAllPaarl('CA 653 789','CJ'));

    });
});
