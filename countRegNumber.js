function countRegNumber (regCount)
{
  var list = [];
  var counter = regCount.split(',');
  for (var i = 0; i < regCount.length; i++) {
      list.push(counter[i]);
  }
  return list.length;
};
