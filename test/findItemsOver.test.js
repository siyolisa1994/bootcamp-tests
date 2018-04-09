describe('findItemsOver', function(){

    it('should return the products which is over than the threshold ', function(){
var threshold= 30;
      var Items=[{"name":"pears","qty":21},{"name":"bananas","qty":27}];

        assert.equal(findItemsOver(Items),0);

      });
          it('should return 2 products that have quantity higher than 25.', function(){
  var fruits=[{"name":"pears","qty":37},{"name":"bananas","qty":27}];
              assert.deepEqual([], findItemsOver('fruits'));
    });
});
