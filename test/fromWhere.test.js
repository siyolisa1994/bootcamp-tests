describe(' fromWhere function', function(){

    it('should return Bellville if the registration number startsWith CY', function(){
        assert.equal(fromWhere('CY'),'Bellville');
          });
    it('should return Paarl if registration number start with CJ', function(){
        assert.equal(fromWhere('CJ'),'Paarl');
    });
    it(' should return Cape Town if registration number start with CA ', function(){
        assert.equal(fromWhere('CA'),'Cape Town');
    });
});
