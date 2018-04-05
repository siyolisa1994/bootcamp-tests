describe('isWeekday function', function(){

    it('must return false if days startsWith S', function(){
        assert.equal(isWeekday('Saturday'), false);

      });

      it('must return true if days is on Monday to Friday', function(){
          assert.equal(isWeekday('Monday'), true);

    });

});
