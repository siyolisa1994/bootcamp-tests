describe('regCheck function', function(){
    it('should return true if regNum startsWith CA CY CJ', function(){
        assert.equal(true,regCheck('DV 23 NB GP', 'GP'));
    });
    it('should list the object length', function(){
        assert.equal(false,regCheck('DV 23 LP GP', 'MP'));


    });
});
