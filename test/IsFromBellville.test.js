describe('IsFromBellville', function(){

  it('check if the regNum is from Bellville', function(){
      assert.equal(IsFromBellville('CY 434-245'), true);
});

    it('must return true if regNum is CY 234-987', function(){
        assert.equal(IsFromBellville('CY 234-987'), true);
    });

    it('must return false if regNum is not from Bellville', function(){
        assert.equal(IsFromBellville('CK 543-097'), false);

    });
});
