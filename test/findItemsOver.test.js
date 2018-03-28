describe('findItemsOver', function(){

    it('should return the items over the threshold ', function(){
      var Items=[{"name":"pears","qty":37},{"name":"bananas","qty":27}];

        assert.equal(findItemsOver(Items),0);

      });
          it('should return products that have quantity higher than the threshold.', function(){
              assert.deepEqual([], findItemsOver('apple'));
    });
});
