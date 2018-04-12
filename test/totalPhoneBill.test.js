describe('totalPhoneBill', function(){

    it('return sms bill if it cost R0.65', function(){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });

    it('should return call bill if the amount is R2.75', function(){
        assert.equal('R2.75', totalPhoneBill('call'));

    });

    it(' should calculate the total of smses and calls', function(){
       assert.equal(totalPhoneBill('sms,sms,call,call'), 'R6.80');

});
});
