describe('transportFee', function(){

    it('you should in pay R20 in the morning', function(){
        assert.equal('R20', transportFee('morning'));
    });

    it('you should pay R10 afternoon', function(){
        assert.equal('R10', transportFee('afternoon'));
});
    it('take ride for free for nightshift', function(){
        assert.equal('free', transportFee('night'));

    });
});
