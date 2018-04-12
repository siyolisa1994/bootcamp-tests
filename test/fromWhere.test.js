describe(' fromWhere function', function(){

    it('should return the registration number of Bellville CY 323-434, CT 874-765, CA 434-864', function(){
        assert.equal(fromWhere('CY 323-434'),'Bellville');
          });
    it('should return the registration of Paarl CJ 656-532, CY 776-232, CA 478-798', function(){
        assert.equal(fromWhere('CJ 656-532'),'Paarl');
    });
    it(' should return the registration number of Cape Town CT 928-877, CA 239-842, CJ 233-333, CY 233-444 ', function(){
        assert.equal(fromWhere('CA 239-842'),'Cape Town');
      });
it('should return Some other places if the registration is neither', function(){
    assert.equal(fromWhere(' CJ 656-532, CY 776-232, CA 478-798'),'Some other place!');

    });
});
