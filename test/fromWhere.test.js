describe('fromWhere', function(){

    it('should return true if CJ Paarl', function(){
        assert.equal('Paarl', fromWhere('CJ 436-544'));
    });

    it('should return other places if registration num is not CJ', function(){
        assert.equal('Some other place!', fromWhere('CA 233 143'));

    });
});
