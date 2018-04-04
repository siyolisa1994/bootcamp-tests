describe('fromWhere', function(){

    it('should return true if CJ Paarl', function(){
        assert.deepEqual('Some other place!', fromWhere('CJ 456 231'));
    });

    it('should return ', function(){
        assert.equal('Some other place!', fromWhere('CA 233 143'));

    });
});
