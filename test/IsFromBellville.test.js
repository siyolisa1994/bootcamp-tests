describe('IsFromBellville', function(){

  it('check if the registration number is from Bellville', function(){
      assert.equal(IsFromBellville('CY 434-245'), true);
});


    it('must return false if regNum is not from Bellville', function(){
        assert.equal(IsFromBellville('CK 543-097'), false);

    });
});
