function countAllFromTown(regNum, regStartString)
{
  var fromTown = regNum.split(',');
  var countAll = [];
  for (var i = 0; i < fromTown.length; i++)
  {
    console.log(fromTown[i]);
    if(fromTown[i].trim().startsWith(regStartString))
    {
      countAll.push(fromTown[i].trim())
    }
  }
    return countAll.length
}
