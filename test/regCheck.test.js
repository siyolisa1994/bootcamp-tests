describe('function regCheck ', function(){

    it('check if a registration number is for GP, L, EC, MP ', function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false );
    });

    it('check if a registration number is for CA, L, EC,', function(){
        assert.equal(regCheck('CA 23 LP GP', 'MP'), false );
    });

});
