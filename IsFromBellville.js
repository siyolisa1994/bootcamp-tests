function isFromBellville(cab){
  var regNumber = cab.startsWith('CY');
  console.log(regNumber);
  return regNumber;
}
isFromBellville('CA 333-333');
