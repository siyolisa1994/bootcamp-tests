function findItemsOver(objList, threshold ){
  var objOver = [];
  for (var i = 0; i < objList.length;i++){
    var listObj20 = objList[i];
    var thisPrice = listObj20.qty;

    if (thisPrice > threshold){
      objOver.push(listObj20);
    }
  }
  console.log(objOver);
  return objOver;
}
