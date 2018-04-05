describe('regCheck function', function(){
    it('should return true if regNum startsWith CA CY CJ', function(){
        assert.equal(regCheck('CY 233-442') true);
    });
    it('should check the registration number', function(){
        assert.equal(false,regCheck('DV 23 LP GP', 'MP'));


    });
});
