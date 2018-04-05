describe('findItemsOver20', function(){

    it('should return the items over 20', function(){
      var Items=[{"name":"pears","qty":37},{"name":"bananas","qty":27}, {"name":"apple","qty":19}];

        assert.equal(findItemsOver20(Items),2);

      });
          it('should return the items which are less than 20', function(){
            var Items=[{"name":"pears","qty":37},
            {"name":"bananas","qty":22},
            {"name":"apple","qty":32}];

              assert.equal(findItemsOver20(Items),3);
    });

});
