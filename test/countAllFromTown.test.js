describe('The countAllFromTown function', function(){

    it('check if the registration number is from Town', function(){
        assert.deepEqual(0, countAllFromTown('CJ 345 123, CJ 435 859, CA 977 908'));
    });

    it('should return false if the regnumber is not from town', function(){
        assert.equal(0, countAllFromTown('CA 653 789'));

    });
});
