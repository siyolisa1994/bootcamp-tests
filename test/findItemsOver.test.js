describe('findItemsOver', function(){
  var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
    it('should return the products which is over than the threshold ', function(){
var results= [  {name : 'pears', qty : 37},
              {name : 'bananas', qty : 27},
          ];

        assert.notDeepEqual(findItemsOver(itemList,),{name : 'pears', qty : 37},{name : 'bananas', qty : 27},);

      });

      it('should return the products which have qty lower than than the threshold ', function(){
      var results= [  {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
            ];
  assert.notDeepEqual(findItemsOver(itemList,),{name : 'apples', qty : 10},{name : 'apples', qty : 3},);


        
    });
});
