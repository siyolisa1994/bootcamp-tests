describe('The countAllFromTown function', function(){

    it('check if the registration number is from Town', function(){
        assert.equal(0, countAllFromTown('CJ 345 123, CJ 435 859, CA 977 908','CL'));
    });

    it('should return all the registration numbers in the string that is for that town', function(){
        assert.equal(1 ,countAllFromTown('CL 124, CJ 345 123, CJ 435 859, CA 977 908', 'CL'));
    });
});
