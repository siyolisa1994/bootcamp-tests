describe('IsFromBellville', function(){

  it('check if the regNum is from Bellville', function(){
      assert.equal(IsFromBellville('CY'), true);
});

    it('must return true if regNum is CY', function(){
        assert.equal(IsFromBellville('CY'), true);
    });

    it('must return false if regNum is not CY', function(){
        assert.equal(IsFromBellville('CK'), false);

    });
});
