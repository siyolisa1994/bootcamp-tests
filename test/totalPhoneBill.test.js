describe('totalPhoneBill', function(){

    it('return sms bill if it cost R0.65', function(){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });

    it('should return call bill if the amount is R2.75', function(){
        assert.equal('R2.75', totalPhoneBill('call'));

    });
    
    it(' should return R7.45', function(){
       assert.equal(totalPhoneBill('Sms, Call'), 'R0.00');

});
});
