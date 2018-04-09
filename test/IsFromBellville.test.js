describe('function isfromBellville ', function(){

    it('should  return true if the registration number is for Bellville', function(){
        assert.equal(isFromBellville('CY 654-234'),true);
    });
    it('should  return false if the registration number is for Bellville', function(){
        assert.equal(isFromBellville('CA 333-333'),false);
   });
});
