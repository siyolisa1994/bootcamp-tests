describe('fromWhere', function(){

    it('should return true if CJ Paarl', function(){
        assert.deepEqual('Paarl', fromWhere('CJ'));
    });

    it('should return ', function(){
        assert.equal('Some other place!', fromWhere('CA 233 143'));

    });
});
